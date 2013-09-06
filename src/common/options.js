KangoAPI.onReady(function () {
  // Localise
  $("[data-locale]").each(function (i, el) {
    $(el).text(kango.i18n.getMessage($(el).data("locale")));
  });
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
