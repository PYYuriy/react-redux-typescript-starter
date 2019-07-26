import { CALL_API } from '../../middleware/api'
import { comments } from '../schemas'

export const GET_COMMENTS = 'users/GET_COMMENTS'
export const GET_COMMENTS_SUCCESS = 'users/GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAIL = 'users/GET_COMMENTS_FAIL'

export const getComments = (page = 1) => ({
    [CALL_API]: {
        types: [GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAIL],
        endpoint: '/unknown',
        schema: comments,
        options: {
            body: {
                page,
            },
        },
    },
})
