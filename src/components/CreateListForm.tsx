import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { CreateListFormType } from "../redux/Lists.redux/Lists.types";
import * as css from "./CreateListForm.css";

interface CreateListFormProps {
  //actions
  createList: (list: CreateListFormType) => void;
}

const CreateListForm: React.FC<CreateListFormProps> = ({ createList }) => {
  const initialListFormState = {
    heading: ""
  };
  const [listForm, updateListForm] = useState(initialListFormState);

  return (
    <form
      className={css.wrapper}
      onSubmit={e => {
        e.preventDefault();
        createList(listForm);
      }}
    >
      <input
        className={css.input}
        value={listForm.heading}
        onChange={e => updateListForm({ ...listForm, heading: e.target.value })}
        placeholder="Name Your List"
      />
      <input className={css.button} type="submit" value="Create List" />
    </form>
  );
};

export default connect(null, actions)(CreateListForm);
