import { style } from "typestyle";

export const grid = style({
  display: "grid",
  gridTemplateRows: ".1fr 1fr",
  justifyContent: "center",
  alignContent: "center",
  padding: "0 2rem"
});

export const content = style({
  gridRow: "2/span 1"
});
