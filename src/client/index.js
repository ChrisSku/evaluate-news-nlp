import { getNLPForArticle, getRecentlyAnalysedArticles } from './js/formHandler'
import { convertArticleToHTML } from './js/htmlConverter'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/article.scss'
import './styles/loader.scss'

const analyzeBlogForm = document.getElementById('analyzeBlogForm')
const currentAnalysedBlog = document.getElementById('currentAnalysedBlog')
const recentlytAnalysedBlogs = document.getElementById('recentlytAnalysedBlogs')
const loader = document.querySelector('.loader')

function displayRecentlyAnalysedArticles() {
    getRecentlyAnalysedArticles().then((data) => {
        recentlytAnalysedBlogs.innerHTML = data
            .map((item) => convertArticleToHTML(item))
            .join('')
    })
}

analyzeBlogForm.addEventListener('submit', (event) => {
    loader.classList.remove('hide')
    currentAnalysedBlog.innerHTML = ''
    getNLPForArticle(event)
        .then(convertArticleToHTML)
        .then((html) => (currentAnalysedBlog.innerHTML = html))
        .then(() => loader.classList.add('hide'))
        .then(displayRecentlyAnalysedArticles)
})

displayRecentlyAnalysedArticles()
