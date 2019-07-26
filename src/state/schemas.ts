import { schema } from 'normalizr'

const { Entity, Array } = schema

export const user = new Entity('users')
export const users = new Array(user)

export const comment = new Entity('comments')
export const comments = new Array(comment)
