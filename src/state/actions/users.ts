import { CALL_API } from '../../middleware/api'
import { user, users } from '../schemas'

export const GET_USERS = 'users/GET_USERS'
export const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS'
export const GET_USERS_FAIL = 'users/GET_USERS_FAIL'

export const UPDATE_USER = 'user/UPDATE_USER'
export const UPDATE_USER_SUCCESS = 'user/UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAIL = 'user/UPDATE_USER_FAIL'

export const getUsers = (page = 1) => ({
    [CALL_API]: {
        types: [GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL],
        endpoint: '/users',
        schema: users,
        options: {
            body: {
                page,
            },
        },
    },
})

export const updateUser = (userId, body) => ({
    [CALL_API]: {
        types: [UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL],
        endpoint: '/users/' + userId,
        schema: user,
        options: {
            method: 'put',
            body,
        },
    },
})
