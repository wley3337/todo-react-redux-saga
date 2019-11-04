import { AppState } from "../reducer";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from 'redux';
import { BASE_URL, setLists } from "../actions"
import { ToDo } from '../ToDos.redux/ToDos.types'


export const handleDeleteToDo = (toDo: ToDo): ThunkAction<Promise<void>, AppState, null, AnyAction> => async(dispatch, getState) =>{
    const token = localStorage.getItem('ToDo-token')
    const options = {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }, 
        body: JSON.stringify({ to_do: toDo })
    }

    try{
        const res = await fetch( BASE_URL+ `/to_dos/${toDo.id}`, options)
        const resObj = await res.json()
        if(resObj.success){
            // get lists from state
            const deletedToDoId = parseInt(resObj.toDoId)
            const listId = parseInt(resObj.toDoListId)
            const currentLists = getState().lists
            const updatedLists = currentLists.map( list => {
                if (list.id === listId){

                    const updatedToDos = list.toDos.filter( toDo => toDo.id !== deletedToDoId)
                    list.toDos = updatedToDos
                    return list
                }else{
                    return list
                }
            })

            dispatch(setLists(updatedLists))
        }
        if(!resObj.success){
            //dispatch error messages 
        }
    }
    catch(err){
        console.error("Handle Create ToDo: ", err)
    }
}