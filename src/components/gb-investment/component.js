import {Enum} from "~/src/services/enumify";
import data from "~/src/services/foe-gb-data";
import gbProcess from "~/src/services/foe-gb-investment";
import Cookies from "js-cookie";

class FormCheck extends Enum {}
FormCheck.initEnum(['VALID', 'INVALID', 'NO_CHANGE']);

/**
 * Get URL parameter
 *
 * @param window Reference to window DOM
 * @param param {string} Parameter to get
 * @returns {*} Return the value geted or null if not found
 */
function getGetParameter (window, param) {
   let vars = {};
   window.location.href.replace (location.hash, '').replace (
      /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
      function (m, key, value) { // callback
         vars[key] = value !== undefined ? value : '';
      }
   );

   if (param) {
      return vars[param] ? vars[param] : null;
   }
   return vars;
}

/**
 * Check if a value it's in range. Bound are include.
 *
 * @param value Value to check
 * @param lowerBound Lower bound
 * @param upperBound Upper bound
 * @returns {boolean} Return true if the value it's in range, false otherwise
 */
function inRange(value, lowerBound, upperBound) {
   return (value >= lowerBound) && (value <= upperBound);
}

/**
 * Call for calculate investments
 */
function submitForm () {
   if (!this.state['is-permalink']) {
      Cookies.set('gb_level', this.state.level, { path: '' });
      Cookies.set('gb_global_investment', this.state['percentage-value-global'], { path: '' });
      for (let i = 0; i < 5; i++) {
         Cookies.set('gb_investment_' + i, this.state['percentage-value'][i], { path: '' });
      }
   }

   this.state.gb = gbProcess.Submit(this.state.level,
      this.state['percentage-value'],
      this.state.current_gb.levels);
}

/**
 * Remove all errors class from the percentages attributes
 */
function removeErrorsFromPercentageArray() {
   for (let i = 0; i < 5; i++) {
      this.getEl('percentage-value-' + i).classList.remove('is-danger');
   }
}

/**
 * Call for updating GB level when user change the value.
 *
 * @return {FormCheck} Return the state
 */
function handlerLevel() {
   let elt = this.getEl('level');
   if (!isNaN(elt.value) && inRange(elt.value, 1, this.state['max-level'])) {
      elt.classList.remove('is-danger');
      if (parseInt(elt.value) !== this.state.level) {
         this.state.level = parseInt(elt.value);
         return FormCheck.VALID;
      }
   } else {
      elt.classList.add('is-danger');
      return FormCheck.INVALID;
   }

   return FormCheck.NO_CHANGE;
}

/**
 * Call for updating global percentage of investments when user change the value.
 *
 * @return {FormCheck} Return the state
 */
function handlerGlobalPercentageInvestment() {
   let elt = this.getEl('percentage-value-global');

   if (!isNaN(elt.value) && (parseFloat(elt.value) >= 0)) {
      elt.classList.remove('is-danger');
      let array = [];
      this.state['percentage-value-global'] = parseFloat(elt.value);
      for (let i = 0; i < 5; i++) {
         array[i] = this.state['percentage-value-global'];
      }
      this.state['percentage-value'] = array;
      return FormCheck.VALID;

   } else {
      elt.classList.add('is-danger');
      return FormCheck.INVALID;
   }
}

export default class {
   onCreate(input) {
      this.state = {
         data: data,
         current_gb: data.gbs[input.gb],
         level : Cookies.get('gb_level') === undefined ? 10 : Cookies.get('gb_level'),
         'max-level': data.gbs[input.gb].levels.length,
         'percentage-value-global' : Cookies.get('gb_global_investment') === undefined ? 90 : Cookies.get('gb_global_investment'),
         'percentage-value': [90, 90, 90, 90, 90],
         gb: null,
         'is-permalink': false
      };

      for (let i = 0; i < 5; i++) {
         if (Cookies.get('gb_investment_' + i) !== undefined) {
            this.state['percentage-value'][i] = parseFloat(Cookies.get('gb_investment_' + i));
         }
      }

      this::submitForm();
   }

   onMount() {
      this.subscribeTo(this.getEl('level')).on('keyup', () => {
         if (this::handlerLevel() === FormCheck.VALID) { this::submitForm(); }
      });

      this.subscribeTo(this.getEl('percentage-value-global')).on('keyup', () => {
         if (this::handlerGlobalPercentageInvestment() === FormCheck.VALID) { this::submitForm(); }
      });

      for (let i = 0; i < 5; i++) {
         this.subscribeTo(this.getEl('percentage-value-' + i)).on('keyup', () => {
            let elt = this.getEl('percentage-value-' + i);

            if (!isNaN(elt.value) && (parseFloat(elt.value) >= 0)) {
               elt.classList.remove('is-danger');
               if (parseFloat(elt.value) !== this.state['percentage-value'][i]) {
                  this.state['percentage-value'][i] = parseFloat(elt.value);
                  this::submitForm();
               }
            } else {
               elt.classList.add('is-danger');
            }
         });
      }

      this.subscribeTo(window).on('DOMContentLoaded', () => {
         let level = getGetParameter(window, 'level');
         let pg    = getGetParameter(window, 'pg');
         let change = false;

         // Check level
         if (level && !isNaN(level) && (parseInt(level) <= this.state['max-level'])) {
            change = true;
            this.state.level = parseInt(level);
         }

         // Check global investors percentage
         if (pg && !isNaN(pg) && (parseFloat(pg) >= 0)) {
            change = true;
            this.state['percentage-value-global'] = parseFloat(pg);
         }

         //  Check percentage value for each investors
         for (let i = 0; i < 5; i++) {
            let val = getGetParameter(window, 'p' + (i + 1));
            if (val && !isNaN(val) && (parseFloat(val) >= 0)) {
               change = true;
               this.state['percentage-value'][i] = parseFloat(val);
            }
         }

         this.state['is-permalink'] = change;
         this::submitForm();
      });

      this.subscribeTo(this.getEl('submit-global')).on('click', () => {
         // If level value changed
         let lChange = this::handlerLevel();
         let pChange = this::handlerGlobalPercentageInvestment();
         if ((lChange !== FormCheck.INVALID) && (pChange !== FormCheck.INVALID) &&
            !((lChange === pChange) && (lChange === FormCheck.NO_CHANGE))) {
            this::removeErrorsFromPercentageArray();
            this::submitForm();
         }
      });

      this.subscribeTo(this.getEl('submit-custom')).on('click', () => {
         let change = FormCheck.NO_CHANGE;
         let listCheck = true;
         for (let i = 0; i < 5; i++) {
            let elt = this.getEl('percentage-value-' + i);
            if (elt.value >= 0) {
               if (parseFloat(elt.value) !== this.state['percentage-value'][i]) {
                  elt.classList.remove('is-danger');
                  this.state['percentage-value'][i] = parseFloat(elt.value);
                  change = listCheck ? FormCheck.VALID : change;
               }
            } else {
               elt.classList.add('is-danger');
               listCheck = false;
               change = FormCheck.INVALID;
            }
         }

         if (change !== FormCheck.INVALID) {
            this::removeErrorsFromPercentageArray();
            this::submitForm();
         }
      });
   }
}
