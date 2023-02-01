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

describe("Methods work as expected", () => {

    test("Overview getter returns the correct string", () => {
        expect(movie.overview).toBe(
            `${movie.title}, a ${movie.genre} film directed by ${movie.director} was released in ${movie.releaseYear}. It received a rating of ${movie.rating}`
        )
    })
})