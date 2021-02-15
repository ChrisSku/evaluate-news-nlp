const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const json = {
    title: 'test json response',
    message: 'this not a message',
    time: 'now'
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

app.get('/help', (req, res) => res.send('test'))

app.get('/test', function (req, res) {
    res.json(json)
})
module.exports = app
