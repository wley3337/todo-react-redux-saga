import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { RouteComponentProps } from "react-router";
import { createUserFormType } from "../redux/CreateUserForm.redux/CreateUserForm.types";
import { History } from "history";
import * as css from "./CreateAccount.css";
import { Link } from "react-router-dom";

interface CreateAccountProps extends RouteComponentProps {
  //actions
  createUser: (createUserForm: createUserFormType, history: History) => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({
  createUser,
  history
}) => {
  const createUserFormInitialState = {
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  };
  const [createUserForm, setCreateUserForm] = useState(
    createUserFormInitialState
  );
  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          createUser(createUserForm, history);
        }}
        className={`${css.form} ${css.text}`}
      >
        <label className={css.label}>
          First Name
          <input
            className={css.input}
            value={createUserForm.firstName}
            onChange={e => {
              setCreateUserForm({
                ...createUserForm,
                firstName: e.target.value
              });
            }}
            placeholder="First Name"
          />
        </label>
        <label className={css.label}>
          Last Name
          <input
            className={css.input}
            value={createUserForm.lastName}
            onChange={e => {
              setCreateUserForm({
                ...createUserForm,
                lastName: e.target.value
              });
            }}
            placeholder="Last Name"
          />
        </label>
        <label className={css.label}>
          Username
          <input
            className={css.input}
            value={createUserForm.username}
            onChange={e => {
              setCreateUserForm({
                ...createUserForm,
                username: e.target.value
              });
            }}
            placeholder="Username"
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            value={createUserForm.password}
            onChange={e => {
              setCreateUserForm({
                ...createUserForm,
                password: e.target.value
              });
            }}
            placeholder="Password"
          />
        </label>
        <button className={css.button}>Create Account</button>
      </form>
      <Link to="/" className={css.link}>
        Back to Sign In
      </Link>
    </React.Fragment>
  );
};

export default connect(null, actions)(CreateAccount);
