/*
    1. The Movie object should have:
        - title
        - director
        - genre
        - release year
        - rating
    2. getOverview() = "<movie>, a <genre> film directed by <director> was released in <releaseYear>. It received a rating of <rating>"
    3. Develop your solution through a constructor function (basic prototype, no class syntax)
*/

module.exports = function Movie(title, director, genre, releaseYear, rating) {
    this._title = title;
    this._director = director;
    this._genre = genre;
    this._releaseYear = releaseYear;
    this._rating = rating;

    Object.defineProperties(this, {
        title: {
            get() {
                return this._title;
            }
        },
        director: {
            get() {
                return this._director;
            }
        },
        genre: {
            get() {
                return this._genre;
            }
        },
        releaseYear: {
            get() {
                return this.releaseYear;
            }
        },
        rating: {
            get() {
                return this._rating;
            }
        }
    })
}