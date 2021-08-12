/**
 * Bulk SMS Solutions
 * nodeJS library
 *
 * example of createHLR call
 *

 * @copyright Notificore LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.createHLR(
	{
		msisdn: '380972920000',
		reference: 'extid1',
		tariff: '0',
		callback_url: 'http://someurl.com/callback/?id=12345'
	}
).then(
	HLR => console.log( "HLR created:", HLR ),
	error => console.log( "HLR creation failed:", error )
);