/**
 * Bulk Viber Solutions
 * nodeJS library
 *
 * example of createViber call
 *

 * @copyright Notificore LIMITED
 */
"use strict";
var notificore = require( 'notificore-nodejs' )( '<YOUR_ACCESS_KEY>' );

notificore.createViber(
	{
		tariff:0,
		validity:1,
		messages:[
			{
				to:[
					{
						msisdn:380972920000,
						reference:"ext_id_19"
					}
				],
				text:"My Viber messages is shinier than your SMS messages",
				alpha_name:"Notificore",
				is_promotional:false,
				options:{
					viber:{
						img:"http://mysite.com/logo.png",
						caption:"See Details",
						action:"http://mysite.com/"
					}
				}
			}
		]
	}
).then(
	viber => console.log( "Viber created:", viber ),
	error => console.log( "Viber creation failed:", error )
);