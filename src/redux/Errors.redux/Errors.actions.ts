import { ErrorMessageType, SET_ERROR_MESSAGES, ErrorMessageActionTypes } from './Errors.types';

export const setErrorMessages = (errorMessages: ErrorMessageType): ErrorMessageActionTypes =>{
    return { type: SET_ERROR_MESSAGES, payload: errorMessages }
}
