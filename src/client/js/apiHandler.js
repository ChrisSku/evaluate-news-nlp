import { validateUrl } from './validateForm'

const serverBaseUrl = 'http://localhost:3000'

export function getNLPForArticle(event) {
    event.preventDefault()
    const url = document.getElementById('analyzeBlogUrl').value
    if (!validateUrl(url)) {
        return Promise.reject(new Error('Invalid URL'))
    }

    const data = JSON.stringify({ url })
    return fetch(serverBaseUrl + '/nlp', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
        if (response.ok) return response.json()
        else throw new Error(`${response.status} - ${response.statusText}`)
    })
}

export function getRecentlyAnalysedArticles() {
    return fetch(serverBaseUrl + '/recently-analyst').then((response) =>
        response.json()
    )
}
