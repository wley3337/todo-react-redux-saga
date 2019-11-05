export const CREATE_TO_DO:string = "CREATE_TO_DO"
export const DELETE_TO_DO: string = "DELETE_TO_DO"

export interface ToDo{
    listId: number 
    title: string
    id?: number
    description?: string 
    due?: string
}

export interface DeleteToDoActionType{
    type: typeof DELETE_TO_DO,
    payload: ToDo
}

export interface CreateToDoActionType{
    type: typeof CREATE_TO_DO,
    payload: ToDo
}

export type ToDoActionTypes = CreateToDoActionType | DeleteToDoActionType