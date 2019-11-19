import { UserType, SET_USER, userActionTypes, CLEAR_USER } from "./User.types";


export const iSUser: UserType = {
    firstName: "",
    lastName: "",
    username: ""
}

export const user = (state = iSUser, action:userActionTypes ) =>{
    switch(action.type){
        case SET_USER:
            return action.payload
        case CLEAR_USER:
            return action.payload
        default: 
            return state
    }
}