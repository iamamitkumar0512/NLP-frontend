const dotenv = require( 'dotenv' );
dotenv.config();

var path = require( 'path' );
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
let aylien = require( 'aylien_textapi' );

const app = express();
app.use( express.static( 'dist' ) );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( cors() );

// Setup server port and apply listener
const port = 5501;
app.listen( port, function () {

	console.log("Welcome to KITS NLP App")
	console.log( `NLP app is listening on port ${port}.` );

});

// Initialize Aylien API
let textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

// Setup default route for app
app.get( '/', function ( req, res ) {

	res.sendFile( 'dist/index.html' );

});

// Setup route for handling Aylien API requests
app.post( '/process', function ( request, response ) {

	console.log( `'Process' POST route:` );
	console.log( request.body );

	textapi.classify( {
			'url': request.body.url
		}, function ( apiError, apiResponse ) {

			if( apiError === null ){

				console.log( apiResponse );
				response.send( apiResponse );
				

			}else{

				response.send( { 'error': 'Soryy Could not find process URL.' } );

			}

		});

});