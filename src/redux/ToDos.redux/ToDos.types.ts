export interface ToDo{
    listId: number 
    title: string
    id?: number
    description?: string 
    due?: string
}
export const DELETE_TO_DO: string = "DELETE_TO_DO"

export interface deleteToDoAction{
    type: typeof DELETE_TO_DO,
    payload: ToDo
}

