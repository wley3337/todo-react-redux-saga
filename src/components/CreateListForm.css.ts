import { style } from "typestyle";
import { cMauve, cBlack } from "../containers/App.css";

export const wrapper = style({
  border: `solid .1rem ${cBlack}`,
  color: cBlack,
  backgroundColor: cMauve,
  padding: "1rem",
  margin: "1rem",
  filter: `drop-shadow(3mm 2mm 1mm ${cBlack})`
});
