class Genre {
  constructor(genre) {
    this.genre = genre;
  }
  getNameGenre() {
    var name = this.genre;
    var firstLetter = name.charAt(0) + name[name.length - 1];
    return firstLetter.toUpperCase();
  }
}

class Movie extends Genre {
  constructor(genre, name, leng) {
    super(genre);
    this.name = name;
    this.leng = parseInt(leng);

  }
  getMoveName() {
    return this.name + " " + this.leng + " min" + " " + super.getNameGenre();
    // return this.genre.getNameGenre()+" " +this.name+" "+this.leng
  }

}

class Program extends Movie {
  constructor(date) {
    super();
    this.date = new Date(date);
    this.movieList = [];
  }
  addMovie(movie) {
    this.movieList.push(movie);
    this.lengthMovie = this.movieList.length;
  }

  getDurationProgram() {
    var programDuration = 0;
    for (var i = 0; i < this.movieList.length; i++) {
      programDuration += this.movieList[i].leng;
    }
    return programDuration;
  }
  dataProgram() {
    var output = "";
    var mydate = this.date.getFullYear();
    this.movieList.forEach(function (Movie) {
      output += "\t" + Movie.getMoveName() + "\n";
    });
    return (
      mydate +
      ", program duration : " +
      this.getDurationProgram() +
      "min" +
      "\n" +
      output
    );
  }
}

class Festival extends Program {
  constructor(name) {
    super();
    this.name = name;
    this.listOfPrograms = [];
  }
  addProgram(program) {
    this.listOfPrograms.push(program);
    this.listOfProgramsLength = this.listOfPrograms.length;
  }
  totalMovie() {
    var total = 0;
    for (var i = 0; i < this.listOfPrograms.length; i++) {
      total += this.listOfPrograms[i].lengthMovie;
    }
    return parseInt(total);
  }
  dataFestival() {
    var data = "";
    this.listOfPrograms.forEach(function (Program) {
      data+=Program.dataProgram()
    });
    return this.name+ "has "+this.totalMovie()+ " movie titles"+"\n"+data
  }
}

var genre1 = new Genre("drama");
var movie1 = new Movie("drama", "Titanik", 90);
var movie2 = new Movie("action", "dog", 50);
var movie3 = new Movie("drama", "Titanik", 90);
var movie4 = new Movie("action", "dog", 50);

var program1 = new Program("2006");
var program2 = new Program("2020");

console.log(movie1.getMoveName());
program1.addMovie(movie1);
program1.addMovie(movie2);

program2.addMovie(movie3);
program2.addMovie(movie4);

console.log(program1.dataProgram());
console.log(program1.lengthMovie);

var festival = new Festival("Belgarde");

festival.addProgram(program1);
festival.addProgram(program2);
console.log(festival.listOfProgramsLength);
console.log(festival.dataFestival());
