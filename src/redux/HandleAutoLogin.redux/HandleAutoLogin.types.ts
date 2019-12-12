import { History } from "history";

export const AUTO_LOGIN: string = "AUTO_LOGIN";

export interface autoLoginActionType {
  type: typeof AUTO_LOGIN;
  payload: History;
}
