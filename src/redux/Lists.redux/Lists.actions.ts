import {
  listActionTypes,
  SET_LISTS,
  ListType,
  ADD_LIST_ITEM,
  CreateListFormType,
  CREATE_LIST,
  CreateListActionTypes,
  CLEAR_LISTS,
  DELETE_LIST,
  DeleteListAction,
  CreateListAction,
  REMOVE_LIST
} from "./Lists.types";
import { put, call, takeEvery } from "redux-saga/effects";
import { BASE_URL } from "../actions";
import { iSLists } from "./Lists.reducer";

export const setLists = (listsArray: Array<ListType>): listActionTypes => {
  return { type: SET_LISTS, payload: listsArray };
};
export const clearLists = (): listActionTypes => {
  return { type: CLEAR_LISTS, payload: iSLists };
};
export const addListItem = (list: ListType): listActionTypes => {
  return { type: ADD_LIST_ITEM, payload: [list] };
};
export const createList = (
  createListForm: CreateListFormType
): CreateListAction => {
  return { type: CREATE_LIST, payload: createListForm };
};
export const deleteList = (list: ListType): DeleteListAction => {
  return { type: DELETE_LIST, payload: list };
};

const removeListItem = (list: ListType): listActionTypes => {
  return { type: REMOVE_LIST, payload: [list] };
};
export function* watchCreateList() {
  yield takeEvery(CREATE_LIST, handleCreateList);
}

export function* watchDeleteList() {
  yield takeEvery(DELETE_LIST, handleDeleteList);
}

function* handleCreateList(action: CreateListActionTypes) {
  const createListForm = action.payload;
  const token = localStorage.getItem("ToDo-token");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ list: createListForm })
  };

  try {
    const res = yield call(fetch, BASE_URL + "/lists", options);
    const resObj = yield call([res, "json"]);
    if (resObj.success) {
      //add the list to store
      yield put(addListItem(resObj.list));
    }
    if (!resObj.success) {
      //dispatch error messages
    }
  } catch (err) {
    console.error("Create List: ", err);
  }
}

function* handleDeleteList(action: DeleteListAction) {
  const token = localStorage.getItem("ToDo-token");
  const listId: number = action.payload.id;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ list: { id: listId } })
  };

  try {
    const res = yield call(fetch, BASE_URL + "/lists/" + listId, options);
    const resObj = yield call([res, "json"]);
    if (resObj.success) {
      //remove deleted list from store
      yield put(removeListItem(resObj.list));
    }
    if (!resObj.success) {
      //dispatch error messages
    }
  } catch (err) {
    console.error("Create List: ", err);
  }
}
//import { AppState } from "../reducer";
//import { ThunkAction } from "redux-thunk";
// import { AnyAction } from 'redux';
//export const handleCreateList = (createListForm: CreateListFormType): ThunkAction<Promise<void>, AppState, null, AnyAction> => async(dispatch) =>{
//     const token = localStorage.getItem('ToDo-token')
//     const options = {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json; charset=utf-8",
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({list: createListForm})
//     }

//     try{
//         const res = await fetch( BASE_URL+ '/lists', options)
//         const resObj = await res.json()
//         if(resObj.success){
//             //set the user here
//             dispatch(addListItem(resObj.list))
//         }
//         if(!resObj.success){
//             //dispatch error messages
//         }
//     }
//     catch(err){
//         console.error("Create List: ", err)
//     }
// }
