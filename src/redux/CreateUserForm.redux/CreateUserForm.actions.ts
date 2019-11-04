
import { ThunkAction } from "redux-thunk";
import { AppState } from "../reducer";
import { AnyAction } from "redux";
import { BASE_URL, setUser, setLists } from "../actions";
import { createUserFormType } from "./CreateUserForm.types";
import { History } from 'history'


export const createUser= (createUserForm: createUserFormType, history: History): ThunkAction<Promise<void>, AppState, null, AnyAction> => async (dispatch) => {
    try{
        const options = {
            method: "POST",
            headers:{
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json"
            },
            body: JSON.stringify({user: createUserForm})
        }

        const res = await fetch(BASE_URL + '/create-user', options)
        const resObj = await res.json()
        if(resObj.success){
            //set localStorage token
            localStorage.setItem('ToDo-token', resObj.token)
            dispatch(setUser(resObj.user.user))
            dispatch(setLists(resObj.user.lists))
            history.push('/dashboard')
        }else{
            //dispatch error Messages 
        }
    }
    catch(err){
        console.error('Create User: ', err)
    }

}