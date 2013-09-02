KangoAPI.onReady(function () {
  kango.invokeAsync("FBOTR.getDSAKey", function (key) {
    console.log(key);
  });
});

function exportDSAKey(argument) {
  kango.invokeAsync("FBOTR.exportDSAKey", function (key) {
    $("#key").text(key);
  });
}
