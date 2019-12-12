import React from "react";
import { Route } from "react-router";
import Login from "../components/Login";
import CreateAccount from "../components/CreateAccount";
import * as css from "./LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className={css.grid}>
      <div className={css.content}>
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route
          exact
          path="/create-account"
          render={props => <CreateAccount {...props} />}
        />
      </div>
    </div>
  );
};

export default LandingPage;
