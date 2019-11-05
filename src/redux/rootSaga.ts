import { all } from 'redux-saga/effects';
import { watchCreateToDo, watchDeleteToDo, watchLoginUser, watchCreateUser, watchCreateList, watchAutoLogin } from './actions';


function* helloSaga(){
    yield console.log('hello')
}


export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchCreateToDo(),
        watchDeleteToDo(),
        watchLoginUser(),
        watchCreateUser(),
        watchCreateList(),
        watchAutoLogin(),
    ])
}