var title = document.querySelector(".movie-title"); 
var lengthItemMovie = document.querySelector(".movie-length"); 
var genreSelect = document.querySelector("select");
var error = document.querySelector(".title-error");
var displayMovie = document.querySelector(".movie-list"); 
var moviesSelectElement = document.querySelector(".movie-select");
var outputMovie = document.querySelector(".movie-output");
var movieLength = document.querySelector("#calculate-movies-lenght"); 

document.querySelector(".create-movie").addEventListener("click", createMovie);

//  Genre
function Genre(name) {
  this.name = name;
}

Genre.prototype.getDataGenre = function () {
  var firstLetter = this.name.charAt(0) + this.name[this.name.length - 1];
  return firstLetter.toUpperCase();
};

var genreList = [];
var genreArray = ["Comedy", "Action", "Drama"];

function createGenre(label) {
  label.forEach(function (genreName) {
    var ganreItem = new Genre(genreName);
    var index = genreList.push(ganreItem);
    var option = document.createElement("option");
    option.textContent = ganreItem.name;
    option.value = index;
    genreSelect.appendChild(option);
  });
}
createGenre(genreArray);

//  Movie

function Movie(title, length, nameOfGenre) {
  this.title = title;
  this.length = length;
  this.nameOfGenre = nameOfGenre;
}

Movie.prototype.getDataMovie = function () {
  var index = genreSelect.selectedIndex;
  var generItemSelect = genreList[index];
  return (
    this.title + " " + this.length + " min " + generItemSelect.getDataGenre()
  );
};

var listOfMovies = [];
var numberOfMovies = listOfMovies.length;

function createMovie() {
  if (!title.value) {
    error.style.display = "block";
    return;
}
  var index = genreSelect.selectedIndex;
  var generItemSelect = genreList[index];

  var movie = new Movie(
    title.value,
    lengthItemMovie.value,
    generItemSelect.getDataGenre()
  );
  if (isMovieInList(listOfMovies, movie)) {
    return;
  }
  addMovie(movie);
  outputMovieInList(movie);
  outputTotalMovieLength();
  title.value = "";
  lengthItemMovie.value = "";
  genreSelect.selectedIndex = 0;
}



function isMovieInList(list, newMovie) {
  if (list.length === 0) {
    return;
  }
  var result;
  list.forEach((movie) => {
    if (movie.getDataMovie() === newMovie.getDataMovie()) {
      return (result = true);
    }
    return (result = false);
  });
  return result;
}
// add movie in movie-list
function addMovie(movie) {
  listOfMovies.push(movie);

  for (var i = 0; i < listOfMovies.length; i++) {
    var movieItem = listOfMovies[i];
    var optionMovie = document.createElement("option");
    optionMovie.textContent = movieItem.getDataMovie();
    optionMovie.value = listOfMovies.length;
  }
  moviesSelectElement.appendChild(optionMovie);
}
// add movie in output-list
function outputMovieInList(movie) {
  var li = document.createElement("li");
  li.textContent = movie.getDataMovie();
  outputMovie.appendChild(li);
}

function totalMoviesLength() {
  var sum = 0;
  listOfMovies.forEach(function (movie) {
    sum += parseInt(movie.length);
  });
  return sum;
}

function outputTotalMovieLength() {
  movieLength.textContent =
    "Total length is : " + totalMoviesLength() + " min.";
}
