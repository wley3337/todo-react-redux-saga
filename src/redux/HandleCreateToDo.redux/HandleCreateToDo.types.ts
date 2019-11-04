import { ToDo, deleteToDoAction } from "../ToDos.redux/ToDos.types"

export const CREATE_TO_DO:string = "CREATE_TO_DO"

export interface CreateToDoAction{
    type: typeof CREATE_TO_DO,
    payload: ToDo
}

export type CreateToDoActionTypes = CreateToDoAction | deleteToDoAction
