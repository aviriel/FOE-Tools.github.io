export default class {
   onCreate(input) {
      this.state = {
        contributors: []
      }
   }
  onMount() {
    this.subscribeTo(window).on('DOMContentLoaded', () => {
      const url = 'https://api.github.com/repos/FOE-Tools/FOE-Tools.github.io/contributors';
      let xhr = new XMLHttpRequest();
      let self = this;
      xhr.open('GET', url, false);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            self.state.contributors = JSON.parse(xhr.responseText);
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
