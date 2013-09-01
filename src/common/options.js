KangoAPI.onReady(function() {
  kango.invokeAsync('kango.storage.getItem', 'myKey', function(myKey) {
    alert(myKey);
  });
});
