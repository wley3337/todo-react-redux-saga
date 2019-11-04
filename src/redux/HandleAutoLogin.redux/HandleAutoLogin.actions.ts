import { History } from 'history';
import { AppState } from "../reducer";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from 'redux';
import { BASE_URL, setUser, setLists } from "../actions"



export const handleAutoLogin = (history: History): ThunkAction <Promise<void>, AppState, null, AnyAction>  => async (dispatch)=> {
    try{
        const token = localStorage.getItem('ToDo-token')
        const options= {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
        }

        const res = await fetch(BASE_URL + '/user', options)
        const resObj = await res.json()

        if(resObj.success){
            dispatch(setUser(resObj.user.user))
            dispatch(setLists(resObj.user.lists))
            history.push('/dashboard')
        }else{
            debugger
        }
    }
    catch(err){
        console.error('Auto Login User: ', err)
    }
}