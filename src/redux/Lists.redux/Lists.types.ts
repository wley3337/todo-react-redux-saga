import { ToDo } from "../ToDos.redux/ToDos.types";

export const SET_LISTS: string = "SET_LISTS";
export const ADD_LIST_ITEM: string = "ADD_LIST_ITEM";
export const CREATE_LIST: string = "CREATE_LIST";
export const CLEAR_LISTS: string = "CLEAR_LISTS";
export const DELETE_LIST: string = "DELETE_LIST";
export const REMOVE_LIST: string = "REMOVE_LIST";

export interface ListType {
  heading: string;
  toDos: Array<ToDo>;
  id: number;
}

export interface CreateListFormType {
  heading: string;
}

export interface SetListAction {
  type: typeof SET_LISTS;
  payload: Array<ListType>;
}

export interface AddListAction {
  type: typeof ADD_LIST_ITEM;
  payload: Array<ListType>;
}

export interface CreateListAction {
  type: typeof CREATE_LIST;
  payload: CreateListFormType;
}

export interface ClearListAction {
  type: typeof CLEAR_LISTS;
  payload: Array<ListType>;
}

export interface DeleteListAction {
  type: typeof DELETE_LIST;
  payload: ListType;
}

export interface RemoveListAction {
  type: typeof REMOVE_LIST;
  payload: Array<ListType>;
}

export type listActionTypes =
  | SetListAction
  | AddListAction
  | ClearListAction
  | RemoveListAction;
export type CreateListActionTypes = CreateListAction;
