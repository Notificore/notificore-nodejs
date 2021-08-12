/**
 * Bulk SMS Solutions
 * nodeJS library
 *
 * example of getSMSPrices call
 *
 * @copyright Notificore HONG KONG LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.getSMSPrices().then(
	prices => console.log( "SMS prices retrieved:", prices ),
	error => console.log( "SMS prices retrieval failed:", error )
);