import { combineReducers } from 'redux';
import { user } from './User.redux/User.reducers'
import { lists } from './Lists.redux/Lists.reducer'
import { errorMessages } from './Errors.redux/Errors.reducers'

const reducers = combineReducers({
    user,
    lists,
    errorMessages
})

export default reducers;

export type AppState = ReturnType<typeof reducers>;
