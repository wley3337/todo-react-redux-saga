import { listActionTypes, SET_LISTS, ListType, ADD_LIST_ITEM, CreateListFormType } from "./Lists.types";

import { AppState } from "../reducer";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from 'redux';
import { BASE_URL} from "../actions";

export const setLists = (listsArray:Array<ListType>):listActionTypes =>{
    return{ type: SET_LISTS, payload: listsArray}
}

export const addListItem =(list: ListType):listActionTypes =>{
    return { type: ADD_LIST_ITEM, payload: [list] }
}

export const handleCreateList = (createListForm: CreateListFormType): ThunkAction<Promise<void>, AppState, null, AnyAction> => async(dispatch) =>{
    const token = localStorage.getItem('ToDo-token')
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({list: createListForm})
    }

    try{
        const res = await fetch( BASE_URL+ '/lists', options)
        const resObj = await res.json()
        if(resObj.success){
            //set the user here
            dispatch(addListItem(resObj.list))
        }
        if(!resObj.success){
            //dispatch error messages 
        }
    }
    catch(err){
        console.error("Create List: ", err)
    }
}
