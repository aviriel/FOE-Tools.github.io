import data from "~/src/services/foe-gb-data.js";
import gbProcess from "~/src/services/foe-gb-investment";

function submitForm (obj) {
obj.state.gb = gbProcess.Submit(obj.state.level,
   obj.state['percentage-value'],
   obj.state.current_gb.levels);
}

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

export default class {
   onCreate(input) {
      this.state = {
         data: data,
         current_gb: data.gbs[input.gb],
         level : 10,
         'max-level': data.gbs[input.gb].levels.length,
         'percentage-value-global' : 90,
         'percentage-value': [90, 90, 90, 90, 90],
         gb: null
      };

      submitForm(this);
   }

   onMount() {
      this.subscribeTo(this.getEl('level')).on('keyup', () => {
         if ((this.getEl('level').value > 0) &&
         (this.getEl('level').value <= this.state['max-level'])) {
            this.state.level = this.getEl('level').value;
            submitForm(this);
         }
      });
      this.subscribeTo(this.getEl('percentage-value-global')).on('keyup', () => {
         if (this.getEl('percentage-value-global').value >= 0) {
            let array = [];
            this.state['percentage-value-global'] = this.getEl('percentage-value-global').value;
            for (let i = 0; i < 5; i++) {
               array[i] = this.state['percentage-value-global'];
            }
            this.state['percentage-value'] = array;
            submitForm(this);
         }
      });

      for (let i = 0; i < 5; i++) {
         this.subscribeTo(this.getEl('percentage-value-' + i)).on('keyup', () => {
            if (this.getEl('percentage-value-' + i).value >= 0) {
               this.state['percentage-value'][i] = this.getEl('percentage-value-' + i).value;
               submitForm(this);
            }
         });
      }

      this.subscribeTo(window).on('DOMContentLoaded', () => {
         let level = getGetParameter(window, 'level');
         let pg    = getGetParameter(window, 'pg');

         // Check level
         if (level && !isNaN(level) && (parseInt(level) <= this.state['max-level'])) {
            this.state.level = parseInt(level);
         }

         // Check global investors percentage
         if (pg && !isNaN(pg)) {
            this.state['percentage-value-global'] = parseFloat(pg);
         }

         //  Check percentage value for each investors
         for (let i = 0; i < 5; i++) {
            let val = getGetParameter(window, 'p' + (i + 1));
            if (val && !isNaN(val)) {
               this.state['percentage-value'][i] = parseFloat(val);
            }
         }
         submitForm(this);
      });
   }
}
