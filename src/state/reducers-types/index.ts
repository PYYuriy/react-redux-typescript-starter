import { Entities } from './entities/index'
import { LocationDescriptorObject } from 'history'
import SubjectsStateModel from './Subjects'

export interface AppStoreState {
    readonly entities: Entities
    readonly subjects: SubjectsStateModel
    readonly router: LocationDescriptorObject
    readonly toast: object
    readonly form: any
}
