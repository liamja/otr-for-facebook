// ==UserScript==
// @name OTR for Facebook
// @include http://*.facebook.com
// @include https://*.facebook.com
// @require lib/zepto.js
// @require lib/dep/bigint.js
// @require lib/dep/crypto.js
// @require lib/dep/eventemitter.js
// @require lib/dep/salsa20.js
// @require lib/otr.js
// ==/UserScript==

console.log("OTR for Facebook loaded.");

var DSA = require('otr').DSA;
var OTR = require('otr').OTR;
