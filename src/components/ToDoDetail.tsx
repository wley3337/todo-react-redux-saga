import React from "react";
import moment from "moment";
import { ToDo } from "../redux/ToDos.redux/ToDos.types";
import * as css from "./ToDoDetail.css";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

interface ToDoDetailProps {
  toDo: ToDo;
  //actions
  deleteToDo: (toDo: ToDo) => void;
}

const ToDoDetail: React.FC<ToDoDetailProps> = ({
  toDo,
  toDo: { title, description, due },
  deleteToDo
}) => {
  return (
    <div className={css.gridWrapper}>
      <div className={css.header}>
        <h3 className={css.title}>{title}</h3>
        <button className={css.button} onClick={() => deleteToDo(toDo)}>
          X
        </button>
      </div>
      <div className={css.description}>
        {due ? (
          <p>
            Due:
            {" " +
              moment(due)
                .utc()
                .format("MMM Do")}
          </p>
        ) : null}
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
};

export default connect(null, actions)(ToDoDetail);
