import Cookies from "js-cookie";
import data from "~/src/services/foe-gb-data";
import gbProcess from "~/src/services/foe-gb-investment";
import utils from "~/src/services/utils";

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
 * Call for calculate investments
 */
function calculate () {
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
  const key = 'level';
  let elt = this.getEl(key);
  let result = utils.checkFormNumeric(elt.value, [1, this.state['max-level']], this.state[key]);
  elt.classList.remove('is-danger');
  if (result.state === utils.FormCheck.VALID) {
    this.state[key] = result.value;
  } else if (result.state === utils.FormCheck.INVALID) {
    elt.classList.add('is-danger');
  }

  return result.state;
}

/**
 * Call for updating global percentage of investments when user change the value.
 *
 * @return {FormCheck} Return the state
 */
function handlerGlobalPercentageInvestment() {
  const key = 'percentage-value-global';
  let elt = this.getEl(key);
  let result = utils.checkFormNumeric(elt.value, ['>=', 0], this.state[key], 'float');
  elt.classList.remove('is-danger');
  if (result.state === utils.FormCheck.VALID) {
    let array = [];
    this.state[key] = parseFloat(elt.value);
    for (let i = 0; i < 5; i++) {
      array[i] = this.state[key];
    }
    this.state['percentage-value'] = array;
  } else if (result.state === utils.FormCheck.INVALID) {
    elt.classList.add('is-danger');
  }

  return result.state;
}

function handlerCustomPercentageInvestment(index) {
  let elt = this.getEl('percentage-value-' + index);
  let result = utils.checkFormNumeric(elt.value, ['>=', 0], this.state['percentage-value'][index], 'float');
  elt.classList.remove('is-danger');
  if (result.state === utils.FormCheck.VALID) {
    this.state['percentage-value'][index] = result.value;
  } else if (result.state === utils.FormCheck.INVALID) {
    elt.classList.add('is-danger');
  }

  return result.state;
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

      this::calculate();
   }

   onMount() {
      this.subscribeTo(this.getEl('level')).on('keyup', () => {
        if (this::handlerLevel() === utils.FormCheck.VALID) { this::calculate(); }
      });

      this.subscribeTo(this.getEl('percentage-value-global')).on('keyup', () => {
         if (this::handlerGlobalPercentageInvestment() === utils.FormCheck.VALID) { this::calculate(); }
      });

      for (let i = 0; i < 5; i++) {
         this.subscribeTo(this.getEl('percentage-value-' + i)).on('keyup', () => {
           if (this::handlerCustomPercentageInvestment(i) === utils.FormCheck.VALID) { this::calculate(); }
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
         this::calculate();
      });

      this.subscribeTo(this.getEl('submit-global')).on('click', () => {
         // If level value changed
         let lChange = this::handlerLevel();
         let pChange = this::handlerGlobalPercentageInvestment();
         if ((lChange !== utils.FormCheck.INVALID) && (pChange !== utils.FormCheck.INVALID) &&
            !((lChange === pChange) && (lChange === utils.FormCheck.NO_CHANGE))) {
            this::removeErrorsFromPercentageArray();
            this::calculate();
         }
      });

      this.subscribeTo(this.getEl('submit-custom')).on('click', () => {
         let change = utils.FormCheck.NO_CHANGE;
         let listCheck = true;
         for (let i = 0; i < 5; i++) {
           let result = this::handlerCustomPercentageInvestment(i);
           if (result.state === utils.FormCheck.VALID) {
             change = listCheck ? utils.FormCheck.VALID : change;
           } else if (result.state === utils.FormCheck.INVALID) {
             listCheck = false;
             change = utils.FormCheck.INVALID;
           }
         }

         if (change !== utils.FormCheck.INVALID) {
            this::removeErrorsFromPercentageArray();
            this::calculate();
         }
      });
   }
}
