export const SET_USER: string = "SET_USER";


export interface UserType{
    firstName: string
    lastName: string 
    username: string 
}

export interface setUserAction{
    type: typeof SET_USER,
    payload: UserType 
}


export type userActionTypes = setUserAction