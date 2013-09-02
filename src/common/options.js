KangoAPI.onReady(function () {
  kango.invokeAsync("FBOTR.getDSAKey", function (key) {
    console.log(key);
  });
});
