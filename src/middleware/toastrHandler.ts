import { toastr } from 'react-redux-toastr'
import { LOG_ERROR, SHOW_ERROR } from '../state/actions/errors'

export default () => next => action => {
    const actionName = action.type.split('/')
    const types = actionName[1].split('_')

    if (action.type && action.type.split('_').pop() === 'SUCCESS')
        if (action.type.indexOf('GET') === -1) toastr.success(types[2], types[0] + ' ' + types[1])
    else if (action.type && (action.type === SHOW_ERROR || action.type.split('_').pop() === 'FAIL'))
        toastr.error('Error!', action.error || action.type)
    else if (action.type && action.type === LOG_ERROR)
        console.error(action.error, action.type)
    return next(action)
}
