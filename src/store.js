import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import persistState from 'redux-localstorage'

import reducers from './reducers'

const initialState = {};

const middlerwares = [thunk];

const enhancer = compose(
    persistState('auth')
)

const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
})


export default function configureStore(middlerware) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middlerwares, middlerware), enhancer)
        
    )
}
