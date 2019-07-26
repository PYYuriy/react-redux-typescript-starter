import { normalize } from 'normalizr'
import { camelizeKeys, decamelizeKeys } from 'humps'
import * as loader from '../state/actions/loader'
import { simpleFetch } from '../utils/fetch'
import config from '../config'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.

const callApi = (endpoint, options: RequestInit, schema) => {

    const API_ROOT = config.serviceUrl
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
    return simpleFetch(fullUrl, {
        ...options,
        body: (options && options.body) ? decamelizeKeys(options.body) : {},
    })
        .then(response => {
            if (response.status === 204 || options && options.method === 'delete')
                return {}

            return response.json().then(json => {
                if (!response.ok) return Promise.reject(json)

                if (!schema) return camelizeKeys(json)

                const camelizedJson = json.data ?
                    camelizeKeys(json.data) :
                    camelizeKeys(json)

                return {
                    ...normalize(camelizedJson, schema),
                    pagination: {
                        page: json.page,
                        perPage: json.per_page,
                        total: json.total,
                        totalPages: json.total_pages,
                    },
                }
            })
        })
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API]

    if (typeof callAPI === 'undefined')
        return next(action)

    let { endpoint } = callAPI

    const { schema, types, options, suppressLoader } = callAPI

    if (typeof endpoint === 'function')
        endpoint = endpoint(store.getState())

    if (typeof endpoint !== 'string')
        throw new Error('Specify a string endpoint URL.')

    if (!Array.isArray(types) || types.length !== 3)
        throw new Error('Expected an array of three action types.')

    if (!types.every(type => typeof type === 'string'))
        throw new Error('Expected action types to be strings.')

    const actionWith = data => {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }

    const [ requestType, successType, failureType ] = types

    next(actionWith({ type: requestType }))

    if (isNotGetRequest(options) && !suppressLoader)
        next(loader.show())

    return callApi(endpoint, options, schema).then(
        response => {
            next(actionWith({
                response,
                type: successType,
            }))

            if (isNotGetRequest(options) && !suppressLoader)
                next(loader.showSuccessful())

            return Promise.resolve(response)
        },
        error => {
            if (isNotGetRequest(options) && !suppressLoader)
                next(loader.showFailed())

            return Promise.reject(next(actionWith({
                type: failureType,
                error: error.message || 'Something bad happened',
            })))
        }
    )
}

function isNotGetRequest(options) {
    return options && options.method && options.method !== 'get'
}
