/**
 * Bulk SMS Solutions
 * nodeJS library
 *
 * example of getBalance call
 *
 * @copyright Notificore LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.getBalance().then(
	balance => console.log( "Balance request completed:", balance ),
	error => console.log( "Balance request failed", error )
);