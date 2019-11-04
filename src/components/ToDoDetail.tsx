import React from 'react'
import moment from 'moment'
import { ToDo } from '../redux/ToDos.redux/ToDos.types'
import * as css from './ToDoDetail.css';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

interface ToDoDetailProps{
    toDo: ToDo
    handleDeleteToDo: (toDo: ToDo)=> void
}


const ToDoDetail: React.FC<ToDoDetailProps> = ({toDo, toDo:{title, description, due }, handleDeleteToDo}) =>{
    return(
        <div className={css.gridWrapper} >
            <h3 className={css.title}>{ title }</h3>
            <div className={css.description}>
                { description ? <p>{description}</p> : null }
                { due ? <p>{ moment(due).utc().format("MMM Do") }</p> : null }
            </div>
            <button onClick={()=> handleDeleteToDo(toDo)}>Delete</button>
       </div>
    )
}

export default connect(null, actions)(ToDoDetail)