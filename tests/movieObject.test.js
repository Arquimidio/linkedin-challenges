const { default: test } = require('node:test');
const Movie = require('../challenges/movieObject');
let movie;

beforeEach(() => {
    movie = new Movie('Hitchhiker\'s War', 'Christopher Tarantino', 'Comedy', '2077', 10);
})

describe("Property / Method is present", () => {
    test("All properties are present", () => {
        expect(
            ['title', 'director', 'genre', 'releaseYear', 'rating'].every(prop => prop in movie)
        ).toBe(true);
    })

    test("All methods are present", () => {
        expect(['overview'].every(method => method in movie)).toBe(true);
    })
})