import { listActionTypes, SET_LISTS, ListType, ADD_LIST_ITEM } from "./Lists.types";



export const setLists = (listsArray:Array<ListType>):listActionTypes =>{
    return{ type: SET_LISTS, payload: listsArray}
}

export const addListItem =(list: ListType):listActionTypes =>{
    return { type: ADD_LIST_ITEM, payload: [list] }
}