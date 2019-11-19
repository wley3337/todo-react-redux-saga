import { AppState } from "../reducer";
import {put, select, call, takeEvery} from 'redux-saga/effects'

// import { ThunkAction } from "redux-thunk";
// import { AnyAction } from 'redux';
import { BASE_URL, setLists } from "../actions"
import { ToDo, CREATE_TO_DO, DELETE_TO_DO, DeleteToDoActionType, CreateToDoActionType } from '../ToDos.redux/ToDos.types'
import { ListType } from '../Lists.redux/Lists.types'


// export const handleDeleteToDo = (toDo: ToDo): ThunkAction<Promise<void>, AppState, null, AnyAction> => async(dispatch, getState) =>{
//     const token = localStorage.getItem('ToDo-token')
//     const options = {
//         method: "DELETE",
//         headers:{
//             "Content-Type": "application/json; charset=utf-8",
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`
//         }, 
//         body: JSON.stringify({ to_do: toDo })
//     }

//     try{
//         const res = await fetch( BASE_URL+ `/to_dos/${toDo.id}`, options)
//         const resObj = await res.json()
//         if(resObj.success){
//             // get lists from state
//             const deletedToDoId = parseInt(resObj.toDoId)
//             const listId = parseInt(resObj.toDoListId)
//             const currentLists = getState().lists
//             const updatedLists = currentLists.map( list => {
//                 if (list.id === listId){

//                     const updatedToDos = list.toDos.filter( toDo => toDo.id !== deletedToDoId)
//                     list.toDos = updatedToDos
//                     return list
//                 }else{
//                     return list
//                 }
//             })

//             dispatch(setLists(updatedLists))
//         }
//         if(!resObj.success){
//             //dispatch error messages 
//         }
//     }
//     catch(err){
//         console.error("Handle Create ToDo: ", err)
//     }
// }

// export const handleCreateToDo = (toDo: ToDo): ThunkAction<Promise<void>, AppState, null, AnyAction> => async(dispatch, getState) =>{
//     const token = localStorage.getItem('ToDo-token')
//     const options = {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json; charset=utf-8",
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ to_do: toDo })
//     }

//     try{
//         const res = await fetch( BASE_URL+ '/to_dos', options)
//         const resObj = await res.json()
//         if(resObj.success){
//             // get lists from state
//             const newToDo = resObj.toDo
//             const currentLists = getState().lists
//             const updatedLists = currentLists.map( list => {
//                 if (list.id === newToDo.listId){
//                     list.toDos.push(newToDo)
//                     return list
//                 }else{
//                     return list
//                 }
//             })

//             dispatch(setLists(updatedLists))
//         }
//         if(!resObj.success){
//             //dispatch error messages 
//         }
//     }
//     catch(err){
//         console.error("Handle Create ToDo: ", err)
//     }
// }

export const createToDo = (toDo: ToDo) => {
    return{ type: CREATE_TO_DO, payload: toDo}
}

//handleCreateToDo Saga
//this is the watch function that gets added to the rootSaga
export function *watchCreateToDo(){
    yield takeEvery(CREATE_TO_DO, hCreateToDo)
}

//this is a helper function argument to pull a piece of the current state
export const getLists = (state: AppState) => state.lists

function *hCreateToDo (action: CreateToDoActionType){
    //this gets the current lists from state
    const lists: Array<ListType> =  yield select(getLists)

    //the action is passed as a default object to the function that is called in the watch
    const toDo = action.payload
    const token = localStorage.getItem('ToDo-token')
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ to_do: toDo })
    }
    
    try{
        //this handles the fetch as a raw promise. There is no async await syntax support for sagas
        const res = yield call( fetch, BASE_URL+ '/to_dos', options)
        //since json is another async call you manage the response the same as the fetch call 
        const resObj = yield call([res, 'json'])
        if(resObj.success){
            const newToDo = resObj.toDo
            const currentLists = lists
            const updatedLists = currentLists.map( list => {
                if (list.id === newToDo.listId){
                    const newList = {...list}
                    newList.toDos.push(newToDo)
                    return newList
                }else{
                    return list
                }
            })
            //put is the dispatch equivalent 'setLists is a plain action object
            yield put(setLists(updatedLists))
        }
        if(!resObj.success){
            //dispatch error messages 
        }
    }
    catch(err){
        console.error("Handle Create ToDo: ", err)
    } 

}

//handleDeleteToDo Saga
export const deleteToDo = (toDo: ToDo) => {
    return {type: DELETE_TO_DO, payload:toDo}
}
export function* watchDeleteToDo (){
    yield takeEvery( DELETE_TO_DO, hDeleteToDo )
}

function* hDeleteToDo (action: DeleteToDoActionType){
    const token = localStorage.getItem('ToDo-token')
    const toDo = action.payload
    const lists: Array<ListType> =  yield select(getLists)

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
        const res = yield call(fetch, BASE_URL + `/to_dos/${toDo.id}`, options)
        const resObj = yield call([res, 'json'])
        if(resObj.success){
            const deletedToDoId = parseInt(resObj.toDoId)
            const listId = parseInt(resObj.toDoListId)
            const updatedLists = lists.map( list => {
                if (list.id === listId){
                    const newListObj = {...list}
                    const updatedToDos = newListObj.toDos.filter( toDo => toDo.id !== deletedToDoId)
                    newListObj.toDos = updatedToDos
                    return newListObj
                }else{
                    return list
                }
            })

            yield put(setLists(updatedLists))
        }
        if(!resObj.success){
            //dispatch error messages 
        }
    }
    catch(err){
        console.error("Handle Create ToDo: ", err)
    }
}