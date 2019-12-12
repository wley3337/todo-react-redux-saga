export const SET_ERROR_MESSAGES: string = "SET_ERROR_MESSAGES";
export const CLEAR_ERROR_MESSAGES: string = "CLEAR_ERROR_MESSAGES";

export interface ErrorMessageType {
  messages: Array<string>;
}

export interface ClearErrorMessageActionType {
  type: typeof CLEAR_ERROR_MESSAGES;
  payload: ErrorMessageType;
}

export interface SetErrorMessageActionType {
  type: typeof SET_ERROR_MESSAGES;
  payload: ErrorMessageType;
}

export type ErrorMessageActionTypes =
  | SetErrorMessageActionType
  | ClearErrorMessageActionType;
