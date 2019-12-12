import { History } from "history";

export const LOGIN_USER: string = "LOGIN_USER";

export interface loginFormType {
  username: string;
  password: string;
}

export interface loginFormAndHistoryType {
  loginForm: loginFormType;
  history: History;
}

export interface loginUserActionType {
  type: typeof LOGIN_USER;
  payload: loginFormAndHistoryType;
}
