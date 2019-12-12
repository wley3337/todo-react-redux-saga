import React from "react";
import ToDoDetail from "./ToDoDetail";
import { ListType } from "../redux/Lists.redux/Lists.types";
import CreateToDoForm from "./CreateToDoForm";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import * as css from "./ListDetail.css";

interface ListDetailProps {
  list: ListType;
  //actions
  deleteList: (list: ListType) => void;
}

const ListDetail: React.FC<ListDetailProps> = ({
  list,
  list: { heading, toDos, id },
  deleteList
}) => {
  return (
    <div className={css.gridWrapper}>
      <div className={css.header}>
        <h1 className={css.title}>{heading}</h1>
        <button className={css.button} onClick={() => deleteList(list)}>
          X
        </button>
      </div>
      <div className={css.description}>
        {toDos.map(td => (
          <ToDoDetail key={`${heading}-${td.id}-${id}`} toDo={td} />
        ))}
        <CreateToDoForm listId={id} />
      </div>
    </div>
  );
};

export default connect(null, actions)(ListDetail);
