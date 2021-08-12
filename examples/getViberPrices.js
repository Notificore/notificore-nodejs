/**
 * Bulk Viber Solutions
 * nodeJS library
 *
 * example of getViberPrices call
 *
 * @copyright Notificore LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.getViberPrices().then(
	prices => console.log( "Viber prices retrieved:", prices ),
	error => console.log( "Viber prices retrieval failed:", error )
);