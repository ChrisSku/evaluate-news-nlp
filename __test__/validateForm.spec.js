import { validateUrl } from '../src/client/js/validateForm'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe('Testing the validation functionality', () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test('Testing correct Urls validateUrl() function', async () => {
        expect(validateUrl).toBeDefined()
        const Url = 'www.ipsum.com'
        const Url1 = 'https://ipsum.com'
        const Url2 = 'ipsum.com'

        expect(validateUrl(Url)).toBeTruthy()
        expect(validateUrl(Url1)).toBeTruthy()
        expect(validateUrl(Url2)).toBeTruthy()
    })

    test('Testing invalite urls validateUrl() function', async () => {
        expect(validateUrl).toBeDefined()
        const Url = 'Lipsum'
        const Url1 = 'Horse/Pony'
        const Url2 = 'http://dnjkwdna'

        expect(validateUrl(Url)).toBeFalsy()
        expect(validateUrl(Url1)).toBeFalsy()
        expect(validateUrl(Url2)).toBeFalsy()
    })
})
