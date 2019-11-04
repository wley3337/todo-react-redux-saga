import { all } from 'redux-saga/effects';


function* helloSaga(){
    console.log('hello')
}


export default function* rootSaga(){
    yield all([
        helloSaga(),
    ])
}