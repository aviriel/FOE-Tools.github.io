exports.path = "/gb-investment/:gb/";

exports.params = [
   {gb: "Observatory"},
   {gb: "Temple_of_Relics"},
   {gb: "Oracle_of_Delphi"},
   {gb: "Tower_of_Babel"},
   {gb: "Statue_of_Zeus"},
   {gb: "Colosseum"},
   {gb: "Lighthouse_of_Alexandria"},
   {gb: "Hagia_Sophia"},
   {gb: "Cathedral_of_Aachen"},
   {gb: "St_Mark_s_Basilica"},
   {gb: "Notre_Dame"},
   {gb: "Saint_Basil_s_Cathedral"},
   {gb: "Castel_del_Monte"},
   {gb: "Deal_Castle"},
   {gb: "Frauenkirche_of_Dresden"},
   {gb: "Capitol"},
   {gb: "Royal_Albert_Hall"},
   {gb: "Chateau_Frontenac"},
   {gb: "Alcatraz"},
   {gb: "Space_Needle"},
   {gb: "Atomium"},
   {gb: "Cape_Canaveral"},
   {gb: "The_Habitat"},
   {gb: "Lotus_Temple"},
   {gb: "Innovation_Tower"},
   {gb: "Dynamic_Tower"},
   {gb: "Voyager_V1"},
   {gb: "The_Arc"},
   {gb: "Rain_Forest_Project"},
   {gb: "Gaea_Statue"},
   {gb: "Arctic_Orangery"},
   {gb: "Seed_Vault"},
   {gb: "Atlantis_Museum"},
   {gb: "The_Kraken"}
];

import template from "./index.marko";
import templateGmChooser from "../gb-investment-gb-chooser/index.marko";

export function handler(input, out) {
   let gb = input.params.gb;

   if (gb && (gb.length > 0)) {
      // delegate rendering to the template
      template.render(input, out);
   } else {
      // delegate rendering to the gb-chooser template
      templateGmChooser.render(input, out);
   }
}
