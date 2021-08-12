/**
 * Bulk SMS Solutions
 * nodeJS library
 *
 * example of getHLRPrices call
 *

 * @copyright Notificore LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.getHLRPrices().then(
	prices => console.log( "HLR prices retrieved:", prices ),
	error => console.log( "HLR prices retrieval failed:", error )
);