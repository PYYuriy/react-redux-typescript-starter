import { InitialAction } from '../../reducers-types/InitialAction'
import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from '../../actions/users'
import config from '../../../config'
import { PaginationModel } from '../../reducers-types/PaginationModel'

export interface UsersStateModel {
    ids: number[]
    pagination: PaginationModel
    isLoading: boolean
}

const initialState: UsersStateModel = {
    ids: [],
    pagination: config.pagination,
    isLoading: false,

}

export default function reducer(
    state = initialState,
    action: InitialAction
) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                isLoading: true,
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                ids: action.response.result,
                pagination: action.response.pagination,
                isLoading: false,
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}
