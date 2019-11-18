export const SET_ERROR_MESSAGES: string = "SET_ERROR_MESSAGES"

export interface ErrorMessageType{
    messages: Array<string>
}


export interface SetErrorMessageActionType{
    type: typeof SET_ERROR_MESSAGES
    payload: ErrorMessageType
}


export type ErrorMessageActionTypes = SetErrorMessageActionType


