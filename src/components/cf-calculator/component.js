import Cookies from "js-cookie";
import utils from "~/src/services/utils";
import questData from "~/src/services/foe-quest-data";

/**
 * Calculate all the rewards and number of quests that can be accomplished.
 * Based on: https://docs.google.com/spreadsheets/d/13-mBxR4eumRXWPi6Ayq2D9OGZ9C55eMEb6xyHnLl_-g/edit#gid=2009380732
 */
function calculate() {
   let cf_boost = this.state['your-cf-boost'] / 100;
   let age = this.state.questData.ages[this.state['your-age']];
   let coins_relation = Math.floor(this.state.coins / age.cost.coins);
   let supplies_relation = Math.floor(this.state.supplies / age.cost.supplies);

   this.state['result_daily_ubq'] = coins_relation < supplies_relation ? coins_relation : supplies_relation;
  this.state['result_bonus_ubq'] = 0;
  this.state['result_coin_supply_return'] = [];


  let nb_quest = Math.floor(((Math.floor((this.state['result_daily_ubq'] +
   this.state['other-rq']) * (2 / 14)) * age.reward.small_coins *
   (1 + cf_boost)) + (Math.floor((this.state['result_daily_ubq'] +
   this.state['other-rq']) * (1 / 14)) * age.reward.large_coins *
   (1 + cf_boost))) / age.cost.gather) +
   Math.floor(this.state['supplies-gathered'] / age.cost.gather);

   let plus_quest = this.state['second-rq'] ? nb_quest : 0;
   let first_lap = true;
   let coin_return;
   let supply_return;
   let coin_return_by_cost;
   let supply_coin_return_by_cost;
   let supplies_return_by_gather;
   let min_between_coin_supplies;
   let final_nb_quest;
   let second_quest_Completed = nb_quest;

   do {
      if (first_lap) {
         first_lap = false;

         coin_return = (Math.floor((this.state['result_daily_ubq'] + this.state['other-rq'] +
         plus_quest) * (2 / 14)) * age.reward.small_coins * (1 + cf_boost)) +
         (Math.floor((this.state['result_daily_ubq'] + this.state['other-rq'] + plus_quest) * (1 / 14)) *
         age.reward.large_coins * (1 + cf_boost));

         supply_return = (Math.floor((this.state['result_daily_ubq'] + this.state['other-rq'] +
         plus_quest) * (2 / 14)) * age.reward.small_supplies * (1 + cf_boost)) +
         (Math.floor((this.state['result_daily_ubq'] + this.state['other-rq'] + plus_quest) * (1 / 14)) *
         age.reward.large_supplies * (1 + cf_boost));
      } else {
         coin_return = (Math.floor(final_nb_quest * (1 / 14)) *
         age.reward.large_coins * (1 +  cf_boost )) +
         (Math.floor(final_nb_quest * (2 / 14)) *
         age.reward.small_coins * (1 +  cf_boost ));

         supply_return = (Math.floor(final_nb_quest * (1 / 14)) *
         age.reward.large_supplies * (1 +  cf_boost )) +
         (Math.floor(final_nb_quest * (2 / 14)) *
         age.reward.small_supplies * (1 +  cf_boost ));
      }


      coin_return_by_cost = Math.floor(coin_return / age.cost.coins);
      supply_coin_return_by_cost = Math.floor(supply_return / age.cost.supplies);
      supplies_return_by_gather = Math.floor(supply_return / age.cost.gather);
      min_between_coin_supplies = coin_return_by_cost < supply_coin_return_by_cost ?
      coin_return_by_cost : supply_coin_return_by_cost;
      final_nb_quest = this.state['second-rq'] ?
      supplies_return_by_gather + min_between_coin_supplies : min_between_coin_supplies;

      this.state['result_bonus_ubq'] += final_nb_quest;

      if ((coin_return > 0) || (supply_return > 0)) {
         this.state['result_coin_supply_return'].push({coin: coin_return, supply: supply_return});
      }
      second_quest_Completed += supplies_return_by_gather;
   } while ((coin_return > 0) || (supply_return > 0));

   this.state['result_second_rq_completed'] = this.state['second-rq'] ? second_quest_Completed : 0;
   this.state['result_total_rq_completed'] = this.state['result_daily_ubq'] +
   this.state['result_bonus_ubq'] + this.state['other-rq'] + this.state['result_second_rq_completed'];

   this.state['result_bp'] = Math.floor((this.state['result_total_rq_completed']) *
   (1 / 14) * age.reward.blueprint);
   this.state['result_medals'] = Math.floor((this.state['result_total_rq_completed']) *
   (1 / 14)) * Math.round(age.reward.medals * (1 + cf_boost));
   this.state['result_goods'] = Math.floor((this.state['result_total_rq_completed']) *
   (5 / 14)) * Math.round(age.reward.goods * (1 + cf_boost));
   this.state['result_fp'] = Math.floor((this.state['result_total_rq_completed']) *
   (1 / 14)) * age.reward.fp;

   this.state['result_total_goods'] = this.state['result_goods'] + this.state['goods'];
   this.state['result_total_fp'] = this.state['result_fp'] + this.state['fp-by-24h'];
}

function handlerForm(key, cookieKey) {
  let elt = this.getEl(key);
  const result = utils.checkFormNumeric(elt.value, ['>=', 0], this.state[key]);
  elt.classList.remove('is-danger');
  if (result.state === utils.FormCheck.VALID) {
    this.state[key] = result.value;
    Cookies.set(cookieKey, result.value, { path: '' });
  } else if (result.state === utils.FormCheck.INVALID) {
    elt.classList.add('is-danger');
  }
  return result.state;
}

export default class {
   onCreate(input) {
      let data = {
         your_cf_boost: 0,
         coins: 0,
         supplies: 0,
         goods: 0,
         fp_by_24h: 0,
         other_rq: 0,
         supplies_gathered: 0
      };

      for (let key in data) {
         if (Cookies.get(key) !== undefined) {
            let result = utils.checkFormNumeric(Cookies.get(key), ['>=', 0], -1);
            if (result.state === utils.FormCheck.VALID) { data[key] = result.value; }
         }
      }

      data.your_age = ((Cookies.get('your-age') === undefined) ||
      !(Cookies.get('your-age') in questData.ages)) ? questData.ages.BronzeAge.key : Cookies.get('your-age');
      data.second_rq = Cookies.get('second-rq') === undefined ? false : Cookies.get('second-rq') === 'true';

      this.state = {
         questData: questData,
         oneQuest: [
            questData.ages.BronzeAge.key,
            questData.ages.IronAge.key,
            questData.ages.EarlyMiddleAges.key,
            questData.ages.HighMiddleAges.key,
         ],
         'your-age': data.your_age,
         'your-cf-boost': data.your_cf_boost,
         'coins': data.coins,
         'supplies': data.supplies,
         'goods': data.goods,
         'fp-by-24h': data.fp_by_24h,
         'other-rq': data.other_rq,
         'second-rq': data.second_rq,
         'supplies-gathered': data.supplies_gathered,
         'result_bp': 0,
         'result_medals': 0,
         'result_goods': 0,
         'result_fp': 0,
         'result_daily_ubq': 0,
         'result_bonus_ubq': 0,
         'result_second_rq_completed': 0,
         'result_total_goods': 0,
         'result_total_fp': 0,
         'result_total_rq_completed': 0,
         'result_coin_supply_return': []
      };

      this::calculate();
   }

   onMount() {
     let data = {
       'your-cf-boost': 'your_cf_boost',
       'coins': 'coins',
       'supplies': 'supplies',
       'goods': 'goods',
       'fp-by-24h': 'fp_by_24h',
       'other-rq': 'other_rq',
       'supplies-gathered': 'supplies_gathered'
     };

      this.subscribeTo(this.getEl('your-age')).on('change', () => {
         let value = this.getEl('your-age').value;
         let elt = this.getEl('your-age-container');

         if (this.getEl('your-age').value in questData.ages) {
            elt.classList.remove('is-danger');
            this.state['your-age'] = value;
            Cookies.set('your-age', value, { path: '' });
            if (this.state.oneQuest.indexOf(this.state['your-age']) > -1) {
               this.state['second-rq'] = false;
               Cookies.set('second-rq', false, { path: '' });
            }
            this::calculate();
         } else {
            elt.classList.add('is-danger');
         }
      });

     for (let key in data) {
       this.subscribeTo(this.getEl(key)).on('keyup', () => {
         if (this::handlerForm(key, data[key]) === utils.FormCheck.VALID) { this::calculate(); }
       });
     }
      this.subscribeTo(this.getEl('second-rq-yes')).on('click', () => {
         this.state['second-rq'] = true;
         Cookies.set('second-rq', true, { path: '' });
         this::calculate();
      });

      this.subscribeTo(this.getEl('second-rq-no')).on('click', () => {
         this.state['second-rq'] = false;
         Cookies.set('second-rq', false, { path: '' });
         this::calculate();
      });

      this.subscribeTo(this.getEl('submit-cf-calculator')).on('click', () => {
        let change = utils.FormCheck.NO_CHANGE;
        let listCheck = true;
        for (let key in data) {
          let result = this::handlerForm(key, data[key]);
          if (result.state === utils.FormCheck.VALID) {
            change = listCheck ? utils.FormCheck.VALID : change;
          } else if (result.state === utils.FormCheck.INVALID) {
            listCheck = false;
            change = utils.FormCheck.INVALID;
          }
        }

        if (change !== utils.FormCheck.INVALID) { this::calculate(); }
      });

      this.subscribeTo(window).on('DOMContentLoaded', () => {
         // This listener is for fix a some trouble with component update when page loading
         let current = this.state['your-age'];
         setTimeout(() => {
            document.querySelector('#option_' + current).selected = true;
         }, 200);
      });
   }
}
