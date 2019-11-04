
export const CREATE_USER: string = "CREATE_USER"

export interface createUserFormType {
    firstName: string 
    lastName: string
    username: string 
    password: string 
}

export interface createUserAction{
    type: typeof CREATE_USER
    payload: createUserFormType
}