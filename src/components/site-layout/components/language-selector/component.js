import Cookies from "js-cookie";

// Functions

function getAll(selector) {
   return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}

export default class {
   onMount() {
      this.subscribeTo(window).on('DOMContentLoaded', () => {
         // Dropdowns

         const $metalinks = getAll('#meta a');

         if ($metalinks.length > 0) {
           $metalinks.forEach($el => {
             $el.addEventListener('click', event => {
               event.preventDefault();
               const target = $el.getAttribute('href');
               const $target = document.getElementById(target.substring(1));
               $target.scrollIntoView(true);
               // window.history.replaceState(null, document.title, `${window.location.origin}${window.location.pathname}${target}`);
               return false;
             });
           });
         }

         // Dropdowns

         const $dropdowns = getAll('.dropdown:not(.is-hoverable)');

         if ($dropdowns.length > 0) {
           $dropdowns.forEach($el => {
             $el.addEventListener('click', event => {
               event.stopPropagation();
               $el.classList.toggle('is-active');
             });
           });

           document.addEventListener('click', event => {
             closeDropdowns();
           });
         }

         const elements = getAll('#lang-menu .dropdown-content .dropdown-item');
         if (elements.length > 0) {
           elements.forEach($el => {
             $el.addEventListener('click', event => {
               event.stopPropagation();
               elements.forEach($el => {
                  $el.classList.remove('is-active');
               });
               $el.classList.toggle('is-active');

               global.changeLanguage($el.getAttribute('data-lang'), (err, t) => {
                 if (err) return console.error('something went wrong loading', err);
                 Cookies.set('lang', $el.getAttribute('data-lang'));
                 location.reload();
              });
             });
           });
        }

         function closeDropdowns() {
           $dropdowns.forEach($el => {
             $el.classList.remove('is-active');
           });
         }
      });
   }
}
