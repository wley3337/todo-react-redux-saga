import { loginFormType, LOGIN_USER, loginUserActionType } from "./LoginForm.types";
import { History } from 'history';

import { BASE_URL, setUser, setLists } from "../actions";
import { put, call, takeEvery } from 'redux-saga/effects';

export const loginUser = (loginForm: loginFormType, history:History) =>{
    return{ type: LOGIN_USER, payload: {loginForm: loginForm,  history: history}}
}
export function* watchLoginUser () {
    yield takeEvery( LOGIN_USER , handleLoginUser )
}

function* handleLoginUser(action: loginUserActionType){
    const loginForm = action.payload.loginForm
    const history = action.payload.history

    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json"
        },
        body: JSON.stringify({user: loginForm})
    }

    try{
        const res = yield call(fetch, BASE_URL + '/login', options)
        const resObj = yield call([res, 'json'])
        if(resObj.success){
            //set the user here
            yield put(setUser(resObj.user.user))
            yield put(setLists(resObj.user.lists))
            localStorage.setItem('ToDo-token', resObj.token)
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


// import { AppState } from "../reducer";
// import { ThunkAction } from "redux-thunk";
// import { AnyAction } from 'redux';

// export const loginUser = (loginForm: loginFormType, history: History): ThunkAction<Promise<void>, AppState, null, AnyAction> => async(dispatch) =>{
//     const options = {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json; charset=utf-8",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({user: loginForm})
//     }

//     try{
//         const res = await fetch( BASE_URL+ '/login', options)
//         const resObj = await res.json()
//         if(resObj.success){
//             localStorage.setItem('ToDo-token', resObj.token)
//             //set the user here
//             dispatch(setUser(resObj.user.user))
//             dispatch(setLists(resObj.user.lists))
//             history.push('/dashboard')
//         }
//         if(!resObj.success){
//             //dispatch error messages 
//         }
//     }
//     catch(err){
//         console.error("Login User: ", err)
//     }
// }