import { loginFormType } from "./LoginForm.types";
import { History } from 'history';
import { AppState } from "../reducer";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from 'redux';
import { BASE_URL, setUser, setLists } from "../actions";


export const loginUser = (loginForm: loginFormType, history: History): ThunkAction<Promise<void>, AppState, null, AnyAction> => async(dispatch) =>{
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json"
        },
        body: JSON.stringify({user: loginForm})
    }

    try{
        const res = await fetch( BASE_URL+ '/login', options)
        const resObj = await res.json()
        if(resObj.success){
            localStorage.setItem('ToDo-token', resObj.token)
            //set the user here
            dispatch(setUser(resObj.user.user))
            dispatch(setLists(resObj.user.lists))
            history.push('/dashboard')
        }
        if(!resObj.success){
            //dispatch error messages 
        }
    }
    catch(err){
        console.error("Login User: ", err)
    }
}