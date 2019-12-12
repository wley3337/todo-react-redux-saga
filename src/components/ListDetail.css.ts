import { style } from "typestyle";
import { cBlack, cMauve, cOrchid } from "../containers/App.css";

export const gridWrapper = style({
  display: "grid",
  gridTemplateRows: "1fr 3fr",
  gridTemplateAreas: " 'header' 'description' ",
  border: `solid .1rem ${cBlack}`,
  backgroundColor: cBlack,
  padding: "1rem",
  margin: "1rem",
  filter: `drop-shadow(2mm 2mm .5mm ${cMauve})`
});

export const header = style({
  gridArea: "header",
  display: "grid",
  gridTemplateColumns: "3fr .5fr",
  alignContent: "center"
});
export const title = style({
  justifySelf: "start",
  margin: "0rem",
  display: "inline-block"
});

export const button = style({
  justifySelf: "end",
  alignSelf: "center",
  width: "55%",
  height: "40%",
  fontSize: ".7rem",
  borderRadius: ".3rem",
  backgroundColor: cOrchid,
  borderColor: cBlack,
  padding: "0"
});
export const description = style({
  gridArea: "description",
  backgroundColor: cMauve
});
