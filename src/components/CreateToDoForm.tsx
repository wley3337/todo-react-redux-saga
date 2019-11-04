import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { AppState } from '../redux/reducer';
import { ToDo } from '../redux/ToDos.redux/ToDos.types';
import moment from 'moment'

interface CreateToDoFormProps{
    //own props
    listId: number
    //actions
    handleCreateToDo: (todo:ToDo) => void
    
}

const CreateToDoForm: React.FC<CreateToDoFormProps> = ({ handleCreateToDo, listId }) =>{
    const initialNewToDoState: ToDo = {
        title: "",
        description: "",
        due: moment(Date.now()).format('YYYY/MM/DD'),
        listId: listId
    } 

    const [newToDo, setNewToDo] = useState(initialNewToDoState)
    return(
        <form onSubmit ={ e => { e.preventDefault(); handleCreateToDo(newToDo)}}>
            <input 
                type="text"
                value={newToDo.title}
                onChange={ e => setNewToDo({...newToDo, title: e.target.value}) }
                placeholder="Title"
                name="Title"
            />
            <input 
                type="text"
                value={newToDo.description}
                onChange={ e => setNewToDo({...newToDo, description: e.target.value}) }
                placeholder="Description"
                name="Description"
            />
            <input 
                type="date"
                value={newToDo.due}
                onChange={ e => setNewToDo({...newToDo, due: e.target.value}) }
                placeholder="Description"
                name="Description"
            />
            <input type="submit" value="create"/>
        </form>
            )
}

const mSTP= ( state: AppState ) =>{
    return{
    }
}

export default connect(mSTP, actions)(CreateToDoForm)