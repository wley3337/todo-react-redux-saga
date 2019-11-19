import { ErrorMessageType, SET_ERROR_MESSAGES, ErrorMessageActionTypes, CLEAR_ERROR_MESSAGES } from "./Errors.types";

export const iSErrorMessage: ErrorMessageType = {
    messages: []
};

export const errorMessages = (state = iSErrorMessage, action:ErrorMessageActionTypes)=>{
    switch(action.type){
        case SET_ERROR_MESSAGES:
            return action.payload
        case CLEAR_ERROR_MESSAGES:
            return action.payload
        default:
            return state
    }
}
