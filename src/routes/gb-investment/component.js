import data from "~/src/services/foe-gb-data.js";

export default class {
   onCreate() {
      this.state = {
         data: data,
      };
   }
}
