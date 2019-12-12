import { LOGOUT, LogoutActionType } from "./Logout.types";
import { takeEvery, put } from "redux-saga/effects";
import { clearUser, clearLists, clearErrorMessages } from "../actions";

export const logout = (): LogoutActionType => ({ type: LOGOUT });

function* handleLogout() {
  localStorage.clear();
  //clear user
  yield put(clearUser());
  //clear lists
  yield put(clearLists());
  //clear errors
  yield put(clearErrorMessages());
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, handleLogout);
}
