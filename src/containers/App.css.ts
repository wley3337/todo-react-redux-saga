import { style } from "typestyle";
import { color } from "csx";

//Main Colors for Project
export const cBlack = color("#211522").toHexString();
export const cOrchid = color("#613659").toHexString();
export const cLav = color("#C197D2").toHexString();
export const cMauve = color("#D3B1C2").toHexString(); //text
export const cLText = color("#EAD9FB").toHexString();

export const main = style({
  backgroundColor: cBlack,
  height: "100vh",
  width: "100vw"
  // applyVars({--cOrchid:})
});
// Orchid
// #613659

// Black
// #211522

// Lavender
// #C197D2

// Mauve
// #D3B1C2
