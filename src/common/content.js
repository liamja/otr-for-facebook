// ==UserScript==
// @name OTR for Facebook
// @include http://*.facebook.com
// @include https://*.facebook.com
// ==/UserScript==

console.log("OTR for Facebook loaded.");

var DSA = require('otr').DSA;
var OTR = require('otr').OTR;
