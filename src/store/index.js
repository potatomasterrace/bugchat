import { createStore, combineReducers } from 'redux'
import { default as app } from './app'
import { default as conversation } from './conversation'

const reducer = combineReducers({
    app: app.reducer,
    conversation: conversation.reducer,
})

export default createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);