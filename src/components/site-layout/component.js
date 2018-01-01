import packagejson from '~/package.json';

export default class {
   onCreate() {
      this.state = {
         site_version: packagejson.version,
         navbar_link: [
            {key: "home", link: "/"},
            {key: "gb_investment", link: "/gb-investment"},
            {key: "secure_position", link: "/secure-position"}
         ]
      };
   }

   onMount() {
      this.subscribeTo(window).on('DOMContentLoaded', () => {
         // Get all "navbar-burger" elements
         let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

         // Check if there are any navbar burgers
         if ($navbarBurgers.length > 0) {

           // Add a click event on each of them
           $navbarBurgers.forEach(function ($el) {
             $el.addEventListener('click', function () {
             // Get the target from the "data-target" attribute
               let target = $el.dataset.target;
               let $target = document.getElementById(target);

               // Toggle the class on both the "navbar-burger" and the "navbar-menu"
             $el.classList.toggle('is-active');
             $target.classList.toggle('is-active');

             });
           });
         }
      });
   }
}
