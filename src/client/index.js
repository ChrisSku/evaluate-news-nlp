import { getNLPForArticle, getRecentlyAnalysedArticles } from './js/formHandler'
import { convertArticleToHTML } from './js/htmlConverter'

const analyzeBlogForm = document.getElementById('analyzeBlogForm')
const currentAnalysedBlog = document.getElementById('currentAnalysedBlog')
const recentlytAnalysedBlogs = document.getElementById('recentlytAnalysedBlogs')

function displayRecentlyAnalysedArticles() {
    getRecentlyAnalysedArticles().then((data) => {
        recentlytAnalysedBlogs.innerHTML = data
            .map((item) => convertArticleToHTML(item))
            .join('')
    })
}

analyzeBlogForm.addEventListener('submit', (event) =>
    getNLPForArticle(event)
        .then(convertArticleToHTML)
        .then((html) => (currentAnalysedBlog.innerHTML = html))
        .then(displayRecentlyAnalysedArticles)
)

displayRecentlyAnalysedArticles()
