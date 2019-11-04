import { setUserAction, UserType, SET_USER } from "./User.types";



export const setUser = (user: UserType): setUserAction => {
    return {type: SET_USER, payload: user}
}


