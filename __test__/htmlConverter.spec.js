import { convertArticleToHTML } from '../src/client/js/htmlConverter'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe('Testing the convert functionality', () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test('Testing the getNLPForArticle() function', async () => {
        expect(convertArticleToHTML).toBeDefined()
        const inputData = {
            title: 'New Test',
            description: 'Lorem Ipsum',
            url: 'https://www.lorem.com',
            agreement: 'test',
            confidence: 'test',
            irony: 'test',
            score_tag: 'test',
            subjectivity: 'test'
        }
        const outputData = `<div class="article">
                <h3 onclick="window.open('https://www.lorem.com', '_blank')">New Test</h3>
                <p>Lorem Ipsum</p>
                <div>
                    <h4>NLP results</h4>
                    agreement: test</br>
                    confidence: test</br> 
                    irony: test</br> 
                    score_tag: test</br> 
                    subjectivity: test
                </div>
            </div>`
        expect(convertArticleToHTML(inputData)).toBe(outputData)
    })
})
