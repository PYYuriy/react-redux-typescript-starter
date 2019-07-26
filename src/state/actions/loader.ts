export const SHOW_LOADING = 'progress-bar/SHOW_LOADING'
export const SHOW_STATUS = 'progress-bar/SHOW_STATUS'
export const HIDE_LOADING = 'progress-bar/HIDE_LOADING'

export const hide = () => ({
    type: HIDE_LOADING,
})

export const show = () => ({
    type: SHOW_LOADING,
})

export const showSuccessful = () => ({
    type: SHOW_STATUS,
    status: 'success',
})

export const showFailed = () => ({
    type: SHOW_STATUS,
    status: 'failed',
})
