import { History } from 'history';
import { BASE_URL, setUser, setLists } from "../actions"
import { put, call, takeEvery } from 'redux-saga/effects'
import { AUTO_LOGIN, autoLoginActionType } from './HandleAutoLogin.types';

export const autoLogin = (history: History):autoLoginActionType =>{
    return{ type: AUTO_LOGIN, payload: history}
}
export function* watchAutoLogin(){
    yield takeEvery( AUTO_LOGIN, handleAutoLogin )
}

function* handleAutoLogin(action:autoLoginActionType){
    const history = action.payload
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

        const res = yield call(fetch, BASE_URL + '/user', options)
        const resObj = yield call([res, 'json'])

        if(resObj.success){
            yield put(setUser(resObj.user.user))
            yield put(setLists(resObj.user.lists))
            history.push('/dashboard')
        }else{
            debugger
        }
    }
    catch(err){
        console.error('Auto Login User: ', err)
    }
}
//import { AppState } from "../reducer";
// import { ThunkAction } from "redux-thunk";
// import { AnyAction } from 'redux';
// export const handleAutoLogin = (history: History): ThunkAction <Promise<void>, AppState, null, AnyAction>  => async (dispatch)=> {
//     try{
//         const token = localStorage.getItem('ToDo-token')
//         const options= {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//                 Accept: "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//         }

//         const res = await fetch(BASE_URL + '/user', options)
//         const resObj = await res.json()

//         if(resObj.success){
//             dispatch(setUser(resObj.user.user))
//             dispatch(setLists(resObj.user.lists))
//             history.push('/dashboard')
//         }else{
//             debugger
//         }
//     }
//     catch(err){
//         console.error('Auto Login User: ', err)
//     }
// }