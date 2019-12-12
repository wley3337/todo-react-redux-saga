import {
  listActionTypes,
  SET_LISTS,
  ListType,
  ADD_LIST_ITEM,
  CLEAR_LISTS,
  REMOVE_LIST
} from "./Lists.types";

export const iSLists: Array<ListType> = [];

export const lists = (
  state = iSLists,
  action: listActionTypes
): Array<ListType> => {
  switch (action.type) {
    case SET_LISTS:
      return action.payload;
    case ADD_LIST_ITEM:
      return [...state, action.payload[0]];
    case CLEAR_LISTS:
      return action.payload;
    case REMOVE_LIST:
      return state.filter(list => list.id !== action.payload[0].id);
    default:
      return state;
  }
};
