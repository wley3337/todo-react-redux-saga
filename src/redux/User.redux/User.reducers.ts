import { UserType, SET_USER, userActionTypes } from "./User.types";


const initialState: UserType = {
    firstName: "",
    lastName: "",
    username: ""
}

export const user = (state = initialState, action:userActionTypes ) =>{
    switch(action.type){
        case SET_USER:
            return action.payload
        default: 
            return state
    }
}