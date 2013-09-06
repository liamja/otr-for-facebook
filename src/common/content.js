// ==UserScript==
// @name OTR for Facebook
// @include http://*.facebook.com
// @include https://*.facebook.com
// @require lib/jquery.js
// @require lib/dep/bigint.js
// @require lib/dep/crypto.js
// @require lib/dep/eventemitter.js
// @require lib/dep/salsa20.js
// @require lib/otr.js
// ==/UserScript==

console.log("OTR for Facebook loaded.");
console.log(kango);

// execute callback when the page is ready:
$(document).ready(function() {
  console.log("doc ready.");
  console.log($('.headerTinymanName').text());

  var elemChatTabs = $('#ChatTabsPagelet .fbDockChatTabFlyout');
  console.log(elemChatTabs.size());
  $(elemChatTabs).on('focus', 'textarea', function(e){
    console.log('textarea has focus.');
  });

  $(elemChatTabs).each(function(index) {
    console.log(this);
    $(this)
      .find(".titlebarButtonWrapper")
      .prepend('<a tabindex="0" data-hover="tooltip" aria-label="Encrypt" class="encrypticon button sx_ad3761 sp_docamc" role="button"></a>');
  });
  
});

// Get last saved color number from storage
kango.invokeAsync('kango.storage.getItem', 'myKey', function(key) {
  console.log('stored value for myKey is ' + myKey);
});
