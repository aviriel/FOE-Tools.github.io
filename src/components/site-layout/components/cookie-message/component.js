// FIXME: Not implemented yet due to Marko bug
import Cookies from "js-cookie";

export default class {
   onCreate() {
      let cookieRead = false;
      if (Cookies.get('has_read_cookie_message') === undefined) {
         Cookies.set('has_read_cookie_message', false);
      } else {
         cookieRead = Cookies.get('has_read_cookie_message') === 'true';
      }

      this.state = {
         hasReadCookieMessage: cookieRead
      };
   }
   onMount() {
      if (this.state.hasReadCookieMessage === 'false') {
         this.subscribeTo(this.getEl('confirm-cookie')).on('click', () => {
            Cookies.set('has_read_cookie_message', true);
            this.setState('hasReadCookieMessage', true);
         });
      }
   }
}
