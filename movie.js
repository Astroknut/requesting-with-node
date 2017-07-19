'use strict'

const request = require('request'); 
const apiKey = require('./env');
const apiUrl = 'https://www.googleapis.com/customsearch/v1?' + apiKey + 'q=';

function get(movieTitle) {
	var URL = apiUrl + movieTitle + 'movie';
	request(URL, function (error, response, body) {
		console.log("Here's your snippet!- ", JSON.parse(body).items[0].title);
		
	});
}

module.exports = get