KangoAPI.onReady(function () {
  kango.invokeAsync("FBOTR.getDSAKey", function (key) {
    kango.console.log(key);
  });
});

function exportDSAKey() {
  kango.invokeAsync("FBOTR.exportDSAKey", function (key) {
    kango.console.log(key);
    $("#key").val(key);
  });
}
