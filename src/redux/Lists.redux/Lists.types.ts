import { ToDo } from "../ToDos.redux/ToDos.types";

export const SET_LISTS: string = "SET_LISTS"
export const ADD_LIST_ITEM: string = "ADD_LIST_ITEM"

export interface ListType{
    heading: string 
    toDos: Array<ToDo>
    id: number
}

export interface setListAction{
    type: typeof SET_LISTS
    payload: Array<ListType>
}

export interface addListAction{
    type: typeof ADD_LIST_ITEM
    payload: Array<ListType>
}

export type listActionTypes = setListAction | addListAction
