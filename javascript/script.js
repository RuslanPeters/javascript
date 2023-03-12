let numbersOfFilms = prompt('How many movies have you watched?');

const personalMovieDB = {
    count: numbersOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i <= 1; i++) {
    let lastMovie = prompt('One of last movie?');
    let rateMovie = prompt('How can you rate it?');
    if (lastMovie == '' || lastMovie == false) {
        i--;
        break;
    } else (console.log(personalMovieDB))
};