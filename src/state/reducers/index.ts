import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import entities from './entities'
import subjects from './subjects'

const rootReducer = (history: History) =>
    combineReducers({
        entities,
        subjects,
        form: formReducer,
        toastr: toastrReducer,
        router: connectRouter(history),
    })

export default rootReducer
