import Cookies from "js-cookie";

export default class {
   onMount() {
      this.subscribeTo(this.getEl('confirm-cookie')).on('click', () => {
         Cookies.set('has_read_cookie_message', true);
         this.getEl('confirm-cookie-container').parentElement.removeChild(this.getEl('confirm-cookie-container'));
      });
   }
}
