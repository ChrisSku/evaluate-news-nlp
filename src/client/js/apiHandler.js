export function getNLPForArticle(event) {
    event.preventDefault()
    const data = JSON.stringify({
        url: document.getElementById('analyzeBlogUrl').value
    })
    return fetch('/nlp', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
        if (response.ok) return response.json()
        else throw new Error(`${response.status} - ${response.statusText}`)
    })
}

export function getRecentlyAnalysedArticles() {
    return fetch('/recently-analyst').then((response) => response.json())
}
