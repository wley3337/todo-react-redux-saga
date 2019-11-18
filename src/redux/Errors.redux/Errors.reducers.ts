import { ErrorMessageType, SET_ERROR_MESSAGES, ErrorMessageActionTypes } from "./Errors.types";

const initialState: ErrorMessageType = {
    messages: []
};

export const errorMessages = (state = initialState, action:ErrorMessageActionTypes)=>{
    switch(action.type){
        case SET_ERROR_MESSAGES:
            return action.payload
        default:
            return state
    }
}
