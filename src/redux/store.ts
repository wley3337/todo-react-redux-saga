import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const sagaMiddleWare = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware( sagaMiddleWare ))
    // composeEnhancers(applyMiddleware(sagaMiddleWare, thunk))
);
sagaMiddleWare.run(rootSaga)

export default store