/**
 * Bulk Viber Solutions
 * nodeJS library
 *
 * example of getViber call
 *
 * @copyright Notificore HONG KONG LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.getViber(
	{
		reference: 'ext_id_19'
	}
).then(
	viber => console.log( "Viber retrieved:", viber ),
	error => console.log( "Viber retrieval failed:", error )
);