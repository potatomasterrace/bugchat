import { createStore, combineReducers } from 'redux'
import { default as app } from './app'
import { default as conversation } from './conversation'

const reducer = combineReducers({
    app: app.reducer,
    conversation: conversation.reducer,
})

export default createStore(reducer);