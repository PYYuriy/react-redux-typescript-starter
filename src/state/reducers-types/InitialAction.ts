import { PaginationModel } from './PaginationModel'
import { Entities } from './entities'

export interface InitialAction {
    type: string
    append: boolean
    response: {
        data?: any
        result: number & number[]
        entities: Entities
        pagination: PaginationModel
    }
}
