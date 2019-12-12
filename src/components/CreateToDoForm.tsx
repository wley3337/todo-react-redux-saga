import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { ToDo } from "../redux/ToDos.redux/ToDos.types";
import moment from "moment";
import * as css from "./CreateToDoForm.css";

interface CreateToDoFormProps {
  //own props
  listId: number;
  //actions
  createToDo: (toDo: ToDo) => void;
}

const CreateToDoForm: React.FC<CreateToDoFormProps> = ({
  listId,
  createToDo
}) => {
  const initialNewToDoState: ToDo = {
    title: "",
    description: "",
    due: moment(Date.now()).format("YYYY/MM/DD"),
    listId: listId
  };

  const [newToDo, setNewToDo] = useState(initialNewToDoState);
  return (
    <form
      className={css.form}
      onSubmit={e => {
        e.preventDefault();
        createToDo(newToDo);
        setNewToDo(initialNewToDoState);
      }}
    >
      <input
        className={css.input}
        type="text"
        value={newToDo.title}
        onChange={e => setNewToDo({ ...newToDo, title: e.target.value })}
        placeholder="Title"
        name="Title"
      />
      <input
        className={css.input}
        type="text"
        value={newToDo.description}
        onChange={e => setNewToDo({ ...newToDo, description: e.target.value })}
        placeholder="Description"
        name="Description"
      />
      <input
        className={css.input}
        type="date"
        value={newToDo.due}
        onChange={e => setNewToDo({ ...newToDo, due: e.target.value })}
        name="Due Date"
      />
      <input className={css.button} type="submit" value="create" />
    </form>
  );
};

export default connect(null, actions)(CreateToDoForm);
