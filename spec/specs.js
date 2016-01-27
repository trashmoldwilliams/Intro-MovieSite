describe("Movie", function(title, firstRelease, rating) {
  it("creates new move object with given specifications", function () {
    var testMovie = new Movie("The Godfather", false, true);
    expect(testMovie.title).to.equal("The Godfather");
    expect(testMovie.firstRelease).to.equal(false);
    expect(testMovie.rating).to.equal(true);
  });
});

describe("priceCalculator", function(firstRelease, age, threeD, imax, matinee) {
  it("add three dollars to overall cost if movie is a first release", function() {
    expect(priceCalculator(true, 25, false, false, false)).to.equal(10)
  });

  it("subtract 2.5 dollars from overall cost if patron has senior discount", function() {
    expect(priceCalculator(false, 70, false, false, false)).to.equal(4.5)
  });

  it("subtract 2.5 dollars from overall cost if patron has child discount", function() {
    expect(priceCalculator(false, 3, false, false, false)).to.equal(4.5)
  });

  it("add four dollars to overall cost if 3d is chosen", function() {
    expect(priceCalculator(false, 25, true, false, false)).to.equal(11)
  });

  it("add five dollars to overall cost if imax is chosen", function() {
    expect(priceCalculator(false, 25, false, true, false)).to.equal(12)
  });

  it("subtract 2 dollars from overall cost if showing is a matinee", function() {
    expect(priceCalculator(false, 25, false, false, true)).to.equal(5)
  });

  it("calculate cost with all values considered", function() {
    expect(priceCalculator(true, 65, true, true, true)).to.equal(14.5)
  });
});
