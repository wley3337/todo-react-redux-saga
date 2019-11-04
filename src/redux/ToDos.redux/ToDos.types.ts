export const CREATE_TO_DO:string = "CREATE_TO_DO"
export const DELETE_TO_DO: string = "DELETE_TO_DO"

export interface ToDo{
    listId: number 
    title: string
    id?: number
    description?: string 
    due?: string
}

export interface deleteToDoAction{
    type: typeof DELETE_TO_DO,
    payload: ToDo
}

export interface CreateToDoAction{
    type: typeof CREATE_TO_DO,
    payload: ToDo
}

export type CreateToDoActionTypes = CreateToDoAction | deleteToDoAction