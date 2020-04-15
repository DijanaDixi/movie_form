var programDate = document.querySelector(".program-date");
var errorProgram = document.querySelector(".program-error");
var programSelectElement = document.querySelector(".program-select");
var programData = document.querySelector(".program-data");

document.querySelector(".create-program").addEventListener("click", createProgram);

document.querySelector(".add-movie").addEventListener("click", addMovieToProgram);


// Program

function Program(date) {
  this.date = this.getDate(date);
  this.listOfMovieInProgram = [];
}

// date
Program.prototype.getDate = function (date) {
  var mydate = new Date(date);
  var myDay = mydate.getDate();
  var myMonth = mydate.getUTCMonth();
  myMonth++;
  var year = mydate.getUTCFullYear();
  return myDay + "-" + myMonth + "-" + year;
};


Program.prototype.getDataProgram = function () {
  var sum = 0;
  this.listOfMovieInProgram.forEach(function (m) {
    sum += parseInt(m.length);
  });
  return ( this.date +","+" program has: " + this.listOfMovieInProgram.length + " movies; " +"duration: "+sum+" min;"
  );
};

var listOfPrograms = [];
var lengthProgram = listOfPrograms.length;


function createProgram() {
  var program = new Program(programDate.value);
  addProgram(program);
}


function addProgram(program) {
  listOfPrograms.push(program);
  for (var i = 0; i < listOfPrograms.length; i++) {
    var itemProgram = listOfPrograms[i];

    var optionProgram = document.createElement("option");
    var p = document.createElement("li");

    p.textContent = itemProgram.getDataProgram();
    optionProgram.textContent = itemProgram.getDataProgram();
    optionProgram.value = listOfPrograms.length;
  }
  programSelectElement.appendChild(optionProgram);
  programData.appendChild(p);
}

function addMovieToProgram() {
  var selectMovie = moviesSelectElement.selectedIndex;
  var elementMovie = listOfMovies[selectMovie];

  var selectProgram = programSelectElement.selectedIndex;
  var elementProgram = listOfPrograms[selectProgram];

  elementProgram.listOfMovieInProgram.push(elementMovie);


  var output = "";
  elementProgram.listOfMovieInProgram.forEach(function (movie) {
    output += movie.getDataMovie()+" ; ";

    var selectP =programSelectElement.options[programSelectElement.selectedIndex];
    selectP.textContent = elementProgram.getDataProgram();

    var listP = programData.children[programSelectElement.selectedIndex];//li
 
    listP.textContent = elementProgram.getDataProgram() + "  " +output;

  });
}
