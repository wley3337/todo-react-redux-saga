import { all } from 'redux-saga/effects';
import { watchCreateToDo, watchDeleteToDo, watchLoginUser, watchCreateUser, watchCreateList, watchAutoLogin, watchLogout } from './actions';


export default function* rootSaga(){
    yield all([
        watchCreateToDo(),
        watchDeleteToDo(),
        watchLoginUser(),
        watchCreateUser(),
        watchCreateList(),
        watchAutoLogin(),
        watchLogout(),
    ])
}