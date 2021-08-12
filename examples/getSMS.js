/**
 * Bulk SMS Solutions
 * nodeJS library
 *
 * example of getSMS call
 *
 * @copyright Notificore LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.getSMS(
	{
		reference: 'ext_id_16'
	}
).then(
	SMS => console.log( "SMS retrieved:", SMS ),
	error => console.log( "SMS retrieval failed:", error )
);