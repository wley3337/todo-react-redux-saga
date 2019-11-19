import { listActionTypes, SET_LISTS, ListType, ADD_LIST_ITEM, CLEAR_LISTS } from "./Lists.types";

export const iSLists:Array<ListType> = []

export const lists = (state= iSLists, action:listActionTypes):Array<ListType> =>{
    switch(action.type){
        case SET_LISTS:
            return action.payload
        case ADD_LIST_ITEM:
            return [...state, action.payload[0]]
        case CLEAR_LISTS:
            return action.payload
        default:
            return state
    }
}