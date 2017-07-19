
var movie = require("./movie");
var threeFavoriteMovies = ['Zootopia', 'The Big Short', 'Inside Out'];
threeFavoriteMovies.forEach(function(film){
	console.log(film);
	movie(film);
  // your code here
});