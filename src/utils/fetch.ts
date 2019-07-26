import isoFetch from 'isomorphic-fetch'
import { keys, isEmpty } from 'lodash'

declare const document

const simpleFetch = (url, option?) => {
    const { method = 'get', body = {} } = option || {}

    const options: RequestInit = {
        method,
        mode: 'cors',
    }

    // const parser = document.createElement('a')
    // parser.href = url
    //
    // if (parser.search) url += '&token=' + document.getElementById('jwt').content
    // else url += '?token=' + document.getElementById('jwt').content

    if (method === 'get' && !isEmpty(body))
        url += '?' + keys(body).map(key => body[key] && `${key}=${body[key]}`).join('&')
    else if (method === 'post' || method === 'put' || method === 'patch')
        options.body = JSON.stringify(body)
    return isoFetch(url, options)
}

const fetchJSON = (url, options?) => simpleFetch(url, options)
    .then(response => response.json())

export {simpleFetch, fetchJSON}
