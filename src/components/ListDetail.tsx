import React from 'react';
import ToDoDetail from './ToDoDetail';
import { ListType } from '../redux/Lists.redux/Lists.types';
import CreateToDoForm from './CreateToDoForm';
import * as css from './ListDetail.css';


interface ListDetailProps{
  list: ListType
}

const ListDetail: React.FC<ListDetailProps> = ({list:{heading, toDos, id}}) =>{
    return(
        <div className={css.gridWrapper}>
           <h1 className={css.title}>{heading}</h1>
           <div className={css.description}>
            {toDos.map( td => <ToDoDetail key={`${heading}-${id}`} toDo={td}/> )}
            <CreateToDoForm listId={id}/>
           </div>
       </div>
    )
}

export default ListDetail