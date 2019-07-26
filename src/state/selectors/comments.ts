import { createSelector } from 'reselect'

const commentsIdSelector = state => state.subjects.comments.ids
const commentsEntitiesSelector = state => state.entities.comments

export const commentsSelector = createSelector(
    commentsIdSelector, commentsEntitiesSelector,
    (ids, entities) => ids.map(id => entities[id])
)
