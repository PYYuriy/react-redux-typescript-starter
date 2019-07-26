import { createSelector } from 'reselect'

const usersIdSelector = state => state.subjects.users.ids
const usersEntitiesSelector = state => state.entities.users

export const usersSelector = createSelector(
    usersIdSelector, usersEntitiesSelector,
    (ids, entities) => ids.map(id => entities[id])
)
