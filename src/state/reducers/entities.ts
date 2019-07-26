import { Entities } from '../reducers-types/entities'
import { InitialAction } from '../reducers-types/InitialAction'
import { customMerge } from '../../utils/customMerge'

const initialState: Entities = {
    comments: {},
    users: {},
}

interface EntitiesActionModel extends InitialAction {
    quoteId: number
    itemId: number
}

export default function reducer(
    state = initialState,
    action: EntitiesActionModel
) {

    if (action.response && action.response.entities)
        return customMerge(state, action.response.entities)

    return state
}
