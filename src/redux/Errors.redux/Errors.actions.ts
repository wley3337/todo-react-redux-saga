import { ErrorMessageType, SET_ERROR_MESSAGES, ErrorMessageActionTypes, CLEAR_ERROR_MESSAGES } from './Errors.types';
import { iSErrorMessage } from './Errors.reducers';

export const setErrorMessages = (errorMessages: ErrorMessageType): ErrorMessageActionTypes =>{
    return { type: SET_ERROR_MESSAGES, payload: errorMessages }
}

export const clearErrorMessages = ():ErrorMessageActionTypes =>{
    return { type: CLEAR_ERROR_MESSAGES, payload: iSErrorMessage }
}