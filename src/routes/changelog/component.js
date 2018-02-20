import remark from "remark";
import html from "remark-html";

export default class {
   onCreate(input) {
      this.state = {
         url: 'https://raw.githubusercontent.com/FOE-Tools/FOE-Tools.github.io/dev/CHANGELOG.md',
         markdown: null
      }
   }
  onMount() {
     this.subscribeTo(window).on('DOMContentLoaded', () => {
      let xhr = new XMLHttpRequest();
      let self = this;
      xhr.open('GET', this.state.url, true);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            remark()
            .use(html)
            .process(xhr.responseText, function (err, file) {
               if (err) { console.error(err); }
               else { self.state.markdown = file; }
            });
          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      };
      xhr.send(null);
    });
  }
}
