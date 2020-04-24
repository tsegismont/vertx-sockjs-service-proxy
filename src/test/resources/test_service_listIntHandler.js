var eb = new EventBus();

eb.onopen = function () {
  var testService = new TestService(eb, 'someaddress');

  testService.listIntHandler(function (err, res) {
    if (err) {
      vertx.eventBus().send("testaddress", "unexpected failure " + err);
    } else if (res[0] != 100 && res[1] != 101 && res[2] != 102) {
      vertx.eventBus().send("testaddress", "unexpected result " + res);
    } else {
      vertx.eventBus().send("testaddress", "ok");
    }
  });
};
