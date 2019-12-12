import { style, media } from "typestyle";
import { cOrchid, cLav, cBlack, cLText } from "./App.css";

export const body = style({
  backgroundColor: cOrchid,
  display: "grid",
  gridTemplateRows: ".4"
});

export const navBar = style(
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "2rem",
    alignContent: "center"
  },
  media({ maxWidth: "740px" }, { gridTemplateColumns: "1fr" })
);
export const welcome = style(
  {
    gridColumn: "1/ span 1",
    justifySelf: "start",
    color: cLText,
    fontSize: "3rem",
    textAlign: "center",
    display: "inline-block",
    marginTop: "2.5rem"
  },
  media({ maxWidth: "740px" }, { justifySelf: "center" })
);

export const button = style(
  {
    padding: ".5rem",
    borderRadius: ".3rem",
    backgroundColor: cOrchid,
    borderColor: cBlack,
    float: "right",
    alignSelf: "center",
    justifySelf: "end",
    $nest: {
      "& a": {
        color: cLav,
        textDecoration: "none",
        fontSize: "1.2rem"
      }
    }
  },
  media({ maxWidth: "740px" }, { justifySelf: "center" })
);
export const boardsWrapper = style({
  display: "grid",
  gridTemplateRows: ".2fr 1fr",
  padding: "1rem"
});
export const boardsTitle = style(
  {
    color: cLText,
    fontSize: "1.5rem",
    textAlign: "left",
    gridRow: "1/span 1",
    borderBottom: `1px solid ${cBlack}`
  },
  media({ maxWidth: "740px" }, { justifySelf: "center" })
);

export const boards = style({
  gridRow: "span1/-1",
  display: "flex"
});
