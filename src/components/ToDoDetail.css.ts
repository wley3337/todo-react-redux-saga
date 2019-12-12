import { style } from "typestyle";
import { cMauve, cOrchid, cLav, cBlack, cLText } from "../containers/App.css";

export const gridWrapper = style({
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateAreas: " 'title' 'description' ",
  color: cMauve,
  backgroundColor: cOrchid,
  borderRadius: ".3rem",
  borderColor: cBlack,
  padding: "0.7rem",
  margin: "0.5rem"
});
export const header = style({
  gridArea: "title",
  display: "grid",
  gridAutoFlow: "column",
  alignContent: "center",
  borderBottom: `1px solid ${cBlack}`
});
export const title = style({
  justifySelf: "start",
  fontSize: "2rem",
  margin: "0rem"
});

export const button = style({
  justifySelf: "end",
  alignSelf: "center",
  width: "40%",
  height: "60%",
  fontSize: ".7rem",
  borderRadius: ".3rem",
  backgroundColor: cOrchid,
  borderColor: cBlack,
  padding: "0"
});

export const description = style({
  gridArea: "description"
});
