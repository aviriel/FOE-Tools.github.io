function calculate() {
   if (this::formValid()) {
         if ((this.state['level-cost'] - this.state['current-deposits']) <= this.state['other-participation']) {
            this.state.fp = -1;
         } else {
            this.state.fp = Math.ceil((this.state['level-cost'] -
               this.state['current-deposits'] -
               (this.state['other-participation'] - this.state['your-participation'])
            ) / 2) + this.state['other-participation'];
         }
   }
}

function formValid() {
   this.state.formValid = true;

   this.getEl('level-cost').classList.remove('is-danger');
   this.getEl('current-deposits').classList.remove('is-danger');
   this.getEl('your-participation').classList.remove('is-danger');
   this.getEl('other-participation').classList.remove('is-danger');

   // This case is default state.
   // simple comparison (no strict) is normal here.
   if ((this.state['level-cost'] == this.state['current-deposits'] ==
      this.state['your-participation'] == this.state['other-participation']) &&
      (this.state['level-cost'] == 0)) {
         return true;
   }

   if (!(this.state['level-cost'] > 0)) {
      this.state.formValid = false;
      this.getEl('level-cost').classList.add('is-danger');
   }

   if (!(this.state['current-deposits'] < this.state['level-cost'])) {
      this.state.formValid = false;
      this.getEl('level-cost').classList.add('is-danger');
      this.getEl('current-deposits').classList.add('is-danger');
   }

   if (!(this.state['your-participation'] < this.state['level-cost'])) {
      this.state.formValid = false;
      this.getEl('your-participation').classList.add('is-danger');
      this.getEl('level-cost').classList.add('is-danger');
   }

   if (!(this.state['other-participation'] < this.state['level-cost'])) {
      this.state.formValid = false;
      this.getEl('other-participation').classList.add('is-danger');
      this.getEl('level-cost').classList.add('is-danger');
   }

   if (!((this.state['your-participation'] + this.state['other-participation'])
         <= this.state['current-deposits'])) {
      this.state.formValid = false;
      this.getEl('your-participation').classList.add('is-danger');
      this.getEl('other-participation').classList.add('is-danger');
      this.getEl('current-deposits').classList.add('is-danger');
   }

   return this.state.formValid;
}

function checkInputLevelCost(input) {
   return (input.levelCost !== undefined) && !isNaN(input.levelCost);
}

function checkLevelCost() {
   let elt = this.getEl('level-cost');
   if ((elt.value.length > 0) && !isNaN(elt.value)) {
      elt.classList.remove('is-danger');
      this.state['level-cost'] = parseInt(elt.value);
      return true;
   } else {
      elt.classList.add('is-danger');
      return false;
   }
}

function checkCurrentDeposits() {
   let elt = this.getEl('current-deposits');
   if ((elt.value.length > 0) && !isNaN(elt.value)) {
      elt.classList.remove('is-danger');
      this.state['current-deposits'] = parseInt(elt.value);
      return true;
   } else {
      elt.classList.add('is-danger');
      return false;
   }
}

function checkYourParticipation() {
   let elt = this.getEl('your-participation');
   if ((elt.value.length > 0) && !isNaN(elt.value)) {
      elt.classList.remove('is-danger');
      this.state['your-participation'] = parseInt(elt.value);
      return true;
   } else {
      elt.classList.add('is-danger');
      return false;
   }
}

function checkOtherParticipation() {
   let elt = this.getEl('other-participation');
   if ((elt.value.length > 0) && !isNaN(elt.value)) {
      elt.classList.remove('is-danger');
      this.state['other-participation'] = parseInt(elt.value);
      return true;
   } else {
      elt.classList.add('is-danger');
      return false;
   }
}

export default class {
   onCreate(input) {
      this.state = {
         fp: 0,
         'your-participation' : 0,
         'other-participation' : 0,
         'level-cost' : checkInputLevelCost(input) ? input.levelCost : 0,
         'current-deposits' : 0,
         formValid: false,
         DOMReady: false
      };
   }

   onInput(input) {
      if (this.state.DOMReady && checkInputLevelCost(input)) {
         this.state['level-cost'] = parseInt(input.levelCost);
         this::calculate();
      }
   }

   onMount() {
      this.subscribeTo(this.getEl('level-cost')).on('keyup', () => {
         if (this::checkLevelCost()) {
            this::calculate();
         }
      });

      this.subscribeTo(this.getEl('current-deposits')).on('keyup', () => {
         if (this::checkCurrentDeposits()) {
            this::calculate();
         }
      });

      this.subscribeTo(this.getEl('your-participation')).on('keyup', () => {
         if (this::checkYourParticipation()) {
            this::calculate();
         }
      });

      this.subscribeTo(this.getEl('other-participation')).on('keyup', () => {
         if (this::checkOtherParticipation()) {
            this::calculate();
         }
      });

      this.subscribeTo(this.getEl('submit-secure-position')).on('click', () => {
         if (this::checkLevelCost() && this::checkCurrentDeposits() &&
            this::checkYourParticipation() && this::checkOtherParticipation()) {
            this::calculate();
         }
      });

      this.subscribeTo(window).on('DOMContentLoaded', () => {
         this.state.DOMReady = true;
         this::calculate();
      });
   }
}
