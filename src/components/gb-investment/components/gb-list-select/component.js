import data from "~/src/services/foe-gb-data.js";

export default class {
   onCreate() {
      this.state = {
         data: data,
         current: null
      };
   }
   onMount() {
      this.subscribeTo(window).on('DOMContentLoaded', () => {
         // This listener is for fix a some trouble with component update when page loading
         let current = this.state.current;
         setTimeout(() => {
            document.querySelector('#option_' + current).selected = true;
         }, 200);
      });
   }
}
