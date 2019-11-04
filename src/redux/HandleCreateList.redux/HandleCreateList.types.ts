export const CREATE_LIST:string = "CREATE_LIST";


export interface CreateListFormType{
    heading: string
}


export interface CreateListAction{
    type: typeof CREATE_LIST,
    payload: CreateListFormType
}
export type CreateListActionTypes = CreateListAction