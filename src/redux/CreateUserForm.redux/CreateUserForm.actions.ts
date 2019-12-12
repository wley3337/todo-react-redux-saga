import { put, call, takeEvery } from "redux-saga/effects";
import { BASE_URL, setUser, setLists } from "../actions";
import {
  createUserFormType,
  CREATE_USER,
  createUserAction
} from "./CreateUserForm.types";
import { History } from "history";

export const createUser = (
  createUserForm: createUserFormType,
  history: History
): createUserAction => {
  return {
    type: CREATE_USER,
    payload: { createUserForm: createUserForm, history: history }
  };
};

export function* watchCreateUser() {
  yield takeEvery(CREATE_USER, handleCreateUser);
}

function* handleCreateUser(action: createUserAction) {
  const createUserForm = action.payload.createUserForm;
  const history = action.payload.history;

  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: createUserForm })
    };

    const res = yield call(fetch, BASE_URL + "/create-user", options);
    const resObj = yield call([res, "json"]);
    if (resObj.success) {
      localStorage.setItem("ToDo-token", resObj.token);
      yield put(setUser(resObj.user.user));
      yield put(setLists(resObj.user.lists));
      history.push("/dashboard");
    } else {
      //dispatch error Messages
    }
  } catch (err) {
    console.error("Create User: ", err);
  }
}

// import { ThunkAction } from "redux-thunk";
// import { AppState } from "../reducer";
// import { AnyAction } from "redux";
// export const createUser= (createUserForm: createUserFormType, history: History): ThunkAction<Promise<void>, AppState, null, AnyAction> => async (dispatch) => {
//     try{
//         const options = {
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json; charset=utf-8",
//                 Accept: "application/json"
//             },
//             body: JSON.stringify({user: createUserForm})
//         }

//         const res = await fetch(BASE_URL + '/create-user', options)
//         const resObj = await res.json()
//         if(resObj.success){
//             //set localStorage token
//             localStorage.setItem('ToDo-token', resObj.token)
//             dispatch(setUser(resObj.user.user))
//             dispatch(setLists(resObj.user.lists))
//             history.push('/dashboard')
//         }else{
//             //dispatch error Messages
//         }
//     }
//     catch(err){
//         console.error('Create User: ', err)
//     }

// }
