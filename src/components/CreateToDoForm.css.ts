import { style } from "typestyle";
import { cOrchid, cMauve, cBlack, cLav } from "../containers/App.css";

export const form = style({
  color: cMauve,
  backgroundColor: cOrchid,
  borderRadius: ".3rem",
  borderColor: cBlack,
  padding: "0.7rem",
  margin: "0.5rem",
  display: "grid",
  gridGap: "2px",
  alignContent: "center"
});
export const input = style({
  textAlign: "center",
  fontWeight: 100,
  display: "block",
  fontSize: "1rem",
  padding: ".3rem"
});

export const button = style({
  marginTop: ".2rem",
  padding: ".5rem",
  width: "100%",
  color: cOrchid,
  fontSize: "1rem",
  borderRadius: ".3rem",
  backgroundColor: cMauve,
  borderColor: cOrchid
});
