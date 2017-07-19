'use strict'

const request = require('request'); 
const apiKey = require('./env');
const apiUrl = 'https://www.googleapis.com/customsearch/v1?' + apiKey + 'q=';

function get(movieTitle) {
	var URL = apiUrl + movieTitle + 'movie';
	request(URL, function (error, response, body) {
		//Const for 'body'
		//Check 'body' for display link "www.imdb.com"
		//If from imdb, then console.log
		console.log("Here's your snippet!- ", JSON.parse(body).items[0].snippet);
		});
}

module.exports = get