import {
    getNLPForArticle,
    getRecentlyAnalysedArticles
} from '../src/client/js/apiHandler.js'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe('Testing the api functionality', () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test('Testing the getNLPForArticle() function', async () => {
        expect(getNLPForArticle).toBeDefined()
        document.body.innerHTML =
            '<input id="analyzeBlogUrl" value="https://www.lorem.com"/>'

        const nplData = {
            title: 'New Test',
            description: 'Lorem Ipsum',
            url: 'https://www.lorem.com',
            agreement: 'test',
            confidence: 'test',
            irony: 'test',
            score_tag: 'test',
            subjectivity: 'test'
        }

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(nplData)
            })
        )
        const event = new Event('test')
        const result = await getNLPForArticle(event)
        expect(result).toBe(nplData)
    })

    test('Testing invalit Url getNLPForArticle() function', async () => {
        expect(getNLPForArticle).toBeDefined()

        document.body.innerHTML = '<input id="analyzeBlogUrl" value="lorem"/>'

        const event = new Event('test')
        await expect(getNLPForArticle(event)).rejects.toThrow('Invalid URL')
    })

    test('Testing invalit blog getNLPForArticle() function', async () => {
        expect(getNLPForArticle).toBeDefined()
        document.body.innerHTML =
            '<input id="analyzeBlogUrl" value="https://www.lorem.com"/>'

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: false,
                status: 404,
                statusText: 'Not Found'
            })
        )
        const event = new Event('test')
        await expect(getNLPForArticle(event)).rejects.toThrow('404 - Not Found')
    })

    test('Testing the getRecentlyAnalysedArticles() function', async () => {
        expect(getRecentlyAnalysedArticles).toBeDefined()

        const nplData = [
            {
                title: 'New Test',
                description: 'Lorem Ipsum',
                url: 'https://www.lorem.com',
                agreement: 'test',
                confidence: 'test',
                irony: 'test',
                score_tag: 'test',
                subjectivity: 'test'
            },
            {
                title: 'New Test2',
                description: 'Lorem Ipsum',
                url: 'https://www.lorem2.com',
                agreement: 'test',
                confidence: 'test',
                irony: 'test',
                score_tag: 'test',
                subjectivity: 'test'
            }
        ]

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(nplData)
            })
        )
        const result = await getRecentlyAnalysedArticles()
        expect(result).toBe(nplData)
    })
})
