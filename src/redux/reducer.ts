import { combineReducers } from 'redux';
import { user } from './User.redux/User.reducers'
import { lists } from './Lists.redux/Lists.reducer'

const reducers = combineReducers({
    user,
    lists
})

export default reducers;

export type AppState = ReturnType<typeof reducers>;