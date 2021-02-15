export function convertArticleToHTML(data) {
    return `<div class="article">
                <h3>${data.title}</h3>
                <p>${data.description}</p>
                <div>
                    agreement: ${data.agreement}; 
                    confidence: ${data.confidence}; 
                    irony: ${data.irony}; 
                    score_tag: ${data.score_tag}; 
                    subjectivity: ${data.subjectivity}
                </div>
            </div>`
}
