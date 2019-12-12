import { style } from "typestyle";
import { cLav, cOrchid } from "../containers/App.css";

// font-family: 'Nunito Sans', sans-serif;

export const text = style({
  color: cLav,
  fontFamily: "'Nunito Sans', sans-serif",
  fontSize: "2rem"
});

export const form = style({
  padding: "0rem",
  margin: "0rem"
});
export const label = style({
  margin: ".5rem 0rem",
  display: "block"
});

export const input = style({
  fontWeight: 200,
  display: "block",
  fontSize: "1.2rem",
  padding: ".3rem"
});

export const button = style({
  padding: ".5rem",
  width: "100%",
  color: cLav,
  fontSize: "1rem",
  borderRadius: ".3rem",
  backgroundColor: cOrchid,
  borderColor: cOrchid
});

export const link = style({
  textAlign: "center",
  display: "block",
  marginTop: "3.5rem",
  width: "94%",
  color: cLav,
  fontSize: "1rem"
});
