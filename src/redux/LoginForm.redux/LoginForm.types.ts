export const LOGIN_USER: string = "LOGIN_USER"

export interface loginFormType{
    username: string 
    password: string 
}

export interface loginUser {
    type: typeof LOGIN_USER,
    payload: loginFormType
}
