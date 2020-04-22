var EventBus = require('./vertx-js/vertx-eventbus');
var TestService = require('./test-js/test_service-proxy');

var eb = new EventBus();

eb.onopen = function () {
  var testService = new TestService(eb, 'someaddress');

  var s = testService.fluentMethod("foo", function (err, res) {
    if (err) {
      vertx.eventBus().send("testaddress", "unexpected failure " + err);
    } else if (res != 'bar') {
      vertx.eventBus().send("testaddress", "unexpected result " + res);
    } else if (s != testService) {
      vertx.eventBus().send("testaddress", "no fluent");
    } else {
      vertx.eventBus().send("testaddress", "ok");
    }
  });
};
