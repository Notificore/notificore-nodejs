/**
 * Bulk SMS Solutions
 * nodeJS library
 *
 * example of getHLR call
 *

 * @copyright Notificore LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.getHLR(
	{
		reference: 'extid1'
	}
).then(
	HLR => console.log( "HLR retrieved:", HLR ),
	error => console.log( "HLR retrieval failed:", error )
);