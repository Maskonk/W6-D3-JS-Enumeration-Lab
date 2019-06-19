const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.findTitles = function () {
  const array = this.films.map((title) => {
    return title.title;
  })
  return array;
}
Cinema.prototype.findFilmByTitle = function (title) {
  const film = this.films.filter((film) => {
    return film.title === title;
  })
  return film[0];
}
Cinema.prototype.filterByProperty = function (property, value) {
  const films = this.films.filter((film) => {
    return film[property] === value;
  })
  return films;
}
Cinema.prototype.checkFilmsForYear = function (year) {
  const films = this.films.filter((film) => {
    return film.year === year;
  })
  return films.length > 0;
}

Cinema.prototype.checkFilmsForLength = function (length) {
  const films = this.films.filter((film) => {
    return film.length > length;
  })
  return films.length === this.films.length;
}

Cinema.prototype.allFilmsRuntime = function () {
  const runtime = this.films.reduce((sum, film) =>{
    return sum + film.length;
  },0)
  return runtime;
}
