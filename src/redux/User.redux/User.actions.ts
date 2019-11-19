import { setUserAction, clearUserAction, UserType, SET_USER, CLEAR_USER } from "./User.types";
import { iSUser } from "./User.reducers";



export const setUser = (user: UserType): setUserAction => {
    return {type: SET_USER, payload: user}
}

export const clearUser = (): clearUserAction => {
    return {type: CLEAR_USER, payload: iSUser }
}


