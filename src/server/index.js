const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const scrape = require('html-metadata')
const dotenv = require('dotenv')
dotenv.config()

const meaningCloudApiKey = process.env.API_KEY
const meaningCloudApiBaseUrl = 'https://api.meaningcloud.com/sentiment-2.1'

function setUpSentimentApi(url, lang) {
    return `${meaningCloudApiBaseUrl}?key=${meaningCloudApiKey}&url=${url}&&lang=${lang}`
}

let recentlyAnalyst = []

async function getMetadata(url) {
    const metadata = await scrape(url)
    let data = metadata.openGraph
        ? metadata.openGraph
        : {
              title: metadata.general.title,
              description: metadata.general.description,
              author: metadata.general.author,
              url: url
          }
    data['lang'] = metadata.general.lang ? metadata.general.lang : 'en'
    return data
}

const scoreTagMapping = {
    'P+': 'strong positive',
    P: 'positive',
    NEU: 'neutral',
    N: 'negative',
    'N+': 'strong negative',
    NONE: 'without sentiment'
}

async function getNLPData(url, lang) {
    return await axios
        .post(setUpSentimentApi(url, lang))
        .then(({ data }) => {
            return {
                status: data.status,
                model: data.model,
                score_tag: scoreTagMapping[data.score_tag],
                agreement: data.agreement,
                subjectivity: data.subjectivity,
                confidence: data.confidence,
                irony: data.irony
            }
        })
        .catch(console.error)
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(express.static('dist'))

app.get('/recently-analyst', (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 0
    res.json(recentlyAnalyst.slice(6 * page, 5 + 6 * page))
})

app.post('/nlp', async (req, res) => {
    let url = req.body.url
    const metaData = await getMetadata(url)
    const nlpData = await getNLPData(url, metaData.lang)
    const data = { ...metaData, ...nlpData }
    if (!recentlyAnalyst.some((it) => it.url.startsWith(url)))
        recentlyAnalyst.unshift(data)
    res.json(data)
})

module.exports = app
