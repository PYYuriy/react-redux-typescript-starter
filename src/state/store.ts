import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import toastrHandler from '../middleware/toastrHandler'
import api from '../middleware/api'

const history = createBrowserHistory()
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function configureStore(initialState = {}) {
    return createStore(
        rootReducer(history),
        initialState,
        composeEnhancers(
            applyMiddleware(
                api,
                toastrHandler,
                routerMiddleware(history),
                thunkMiddleware
            )
        )
    )
}

const store = configureStore()

export default store
