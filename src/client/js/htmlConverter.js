export function convertArticleToHTML(data) {
    return `<div class="article">
                <h3 onclick="window.open('${data.url}', '_blank')">${data.title}</h3>
                <p>${data.description}</p>
                <div>
                    <h4>NLP results</h4>
                    agreement: ${data.agreement}</br>
                    confidence: ${data.confidence}</br> 
                    irony: ${data.irony}</br> 
                    score_tag: ${data.score_tag}</br> 
                    subjectivity: ${data.subjectivity}
                </div>
            </div>`
}
