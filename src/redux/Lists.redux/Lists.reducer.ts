import { listActionTypes, SET_LISTS, ListType, ADD_LIST_ITEM } from "./Lists.types";

const initialState:Array<ListType> = []

export const lists = (state= initialState, action:listActionTypes):Array<ListType> =>{
    switch(action.type){
        case SET_LISTS:
            return action.payload
        case ADD_LIST_ITEM:
            return [...state, action.payload[0]]
        default:
            return state
    }
}