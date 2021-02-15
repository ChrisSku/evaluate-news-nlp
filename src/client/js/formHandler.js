export function getNLPForArticle(event) {
    event.preventDefault()
    const data = JSON.stringify({
        url: document.getElementById('analyzeBlogUrl').value
    })
    return fetch('/nlp', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => response.json())
}

export function getRecentlyAnalysedArticles() {
    return fetch('/recently-analyst').then((response) => response.json())
}
