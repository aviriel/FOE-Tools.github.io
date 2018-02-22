export default class {
   onCreate() {
      this.state = {
         url: 'https://api.github.com/repos/FOE-Tools/FOE-Tools.github.io/contributors',
         contributors: []
      }
   }
  onMount() {
    this.subscribeTo(window).on('DOMContentLoaded', () => {
      let xhr = new XMLHttpRequest();
      let self = this;
      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            self.state.contributors = JSON.parse(xhr.responseText);
          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.open('GET', this.state.url, true);
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      };
      xhr.send(null);
    });
  }
}
