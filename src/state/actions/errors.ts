export const SHOW_ERROR = 'errors/SHOW_ERROR'
export const LOG_ERROR = 'errors/LOG_ERROR'

export function logError(dispatch, error) {
    dispatch({ type: LOG_ERROR, error })
}

export function showError(dispatch, error) {
    dispatch({ type: SHOW_ERROR, error })
}

export function handleError(dispatch, error) {
    logError(dispatch, error)
    showError(dispatch, error)
}
