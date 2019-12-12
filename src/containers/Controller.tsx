import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../redux/reducer";
import { UserType } from "../redux/User.redux/User.types";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import HandleAutoLogin from "../components/HandleAutoLogin";

interface ControllerProps {
  user: UserType;
}

const Controller: React.FC<ControllerProps> = ({ user }) => {
  return (
    <div>
      {localStorage.getItem("ToDo-token") ? (
        user.firstName === "" ? (
          <Route path="/" component={HandleAutoLogin} />
        ) : null
      ) : (
        <Route path="/" component={LandingPage} />
      )}
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

const mSTP = (state: AppState) => {
  return {
    user: state.user
  };
};

export default connect(mSTP)(Controller);
