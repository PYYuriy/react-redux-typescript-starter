import { InitialAction } from '../../reducers-types/InitialAction'
import { GET_COMMENTS, GET_COMMENTS_FAIL, GET_COMMENTS_SUCCESS } from '../../actions/comments'
import { PaginationModel } from '../../reducers-types/PaginationModel'
import config from '../../../config'

export interface CommentsStateModel {
    ids: number[]
    pagination: PaginationModel
    isLoading: boolean
}

const initialState: CommentsStateModel = {
    ids: [],
    pagination: config.pagination,
    isLoading: false,
}

export default function reducer(
    state = initialState,
    action: InitialAction
) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                isLoading: true,
            }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                ids: action.response.result,
                pagination: action.response.pagination,
                isLoading: false,
            }
        case GET_COMMENTS_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}
