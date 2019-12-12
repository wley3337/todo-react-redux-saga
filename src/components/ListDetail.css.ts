import { style } from "typestyle";
import { cBlack, cMauve } from "../containers/App.css";

export const gridWrapper = style({
  display: "grid",
  gridTemplateRows: "4rem 1fr",
  gridTemplateAreas: " 'title' 'description' ",
  border: `solid .1rem ${cBlack}`,
  backgroundColor: cBlack,
  padding: "1rem",
  margin: "1rem",
  filter: `drop-shadow(2mm 2mm .5mm ${cMauve})`
});

export const title = style({
  gridArea: "title",
  textAlign: "left",
  margin: "0rem",
  display: "inline-block"
});

export const description = style({
  gridArea: "description",
  backgroundColor: cMauve
});
