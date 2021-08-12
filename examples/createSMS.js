/**
 * Bulk SMS Solutions
 * nodeJS library
 *
 * example of createSMS call
 *

 * @copyright Notificore LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.createSMS(
	{
		destination: "phone",
		originator:"alpha name",
		body:"message text",
		msisdn:"380972000000",
		reference:"ext_id_16",
		validity:"1",
		tariff:"0"
	}
).then(
	SMS => console.log( "SMS created:", SMS ),
	error => console.log( "SMS creation failed:", error )
);