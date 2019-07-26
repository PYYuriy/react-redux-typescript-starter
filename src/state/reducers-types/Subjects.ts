import { CommentsStateModel } from '../reducers/subjects/comments'
import { UsersStateModel } from '../reducers/subjects/users'


export default interface SubjectsStateModel {
    comments: CommentsStateModel
    users: UsersStateModel
}
