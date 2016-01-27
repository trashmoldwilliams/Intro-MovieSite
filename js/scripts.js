function Movie(title, firstRelease, rating) {
  this.title = title;
  this.firstRelease = firstRelease;
  this.rating = rating;
}

var priceCalculator = function(firstRelease, age, threeD, imax, matinee) {
  var price = 7;

  if (firstRelease === "true") {
    price += 3;
  }

  if (age >= 60 || age <= 7) {
    price -= 2.5;
  }

  if (threeD === "true") {
    price += 4;
  }

  if (imax === "true") {
    price += 5;
  }

  if (matinee === "true") {
    price -= 2;
  }

  return price;
}

var theRevanent = new Movie("The Revanent", true, true);
var insideOut = new Movie("Inside Out", false, false);
var movies = [theRevanent, insideOut];

$(document).ready(function() {
  $("button#ageSubmit").click(function() {
    var age = $("input#ageInput").val();
    var possibleMovies = [];

    movies.forEach(function(movie) {
      if (movie.rating === true) {
        if (age >= 17) {
          possibleMovies.push(movie);
        }
      } else {
        possibleMovies.push(movie);
      }
    });

    possibleMovies.forEach(function(possibleMovie) {
      $("form#movieList").append("<input class='radio-choice' type='radio' " +
                                  "name='movieChoice' " +
                                  "value= '" + possibleMovie.firstRelease + "'>" +
                                  possibleMovie.title + "<br>"
      );
    });
    $("#movieSelection").slideDown();
    $("input.radio-choice").click(function() {
      $("#detailsInput").slideDown();
    });

    $("#detailsForm").submit(function(event) {
      event.preventDefault();
      var firstRelease = $(".radio-choice:checked").val();
      var matinee = $("#showTimeSelector").val();
      var threeD = $("#threeDSelector").val();
      var imax = $("#imaxSelector").val();

      var priceOutput = priceCalculator(firstRelease, age, threeD, imax, matinee);
      $("#priceOutput").text(priceOutput);
      $("#priceResult").show();
    });
  });
});
