import React from 'react'
import moment from 'moment'
import { ToDo } from '../redux/ToDos.redux/ToDos.types'
import * as css from './ToDoDetail.css'

interface ToDoDetailProps{
    toDo: ToDo
}


const ToDoDetail: React.FC<ToDoDetailProps> = ({toDo:{title, description, due }}) =>{
    return(
        <div className={css.gridWrapper} >
            <h3 className={css.title}>{ title }</h3>
            <div className={css.description}>
                { description ? <p>{description}</p> : null }
                { due ? <p>{ moment(due).utc().format("MMM Do") }</p> : null }
            </div>
       </div>
    )
}

export default ToDoDetail