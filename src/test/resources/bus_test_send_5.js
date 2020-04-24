var bus = new EventBus();

bus.onopen = function () {
  bus.send("the_address", {"body": "the_message"}, {"the_header_name": "the_header_value"}, function (err, res) {
    bus.send("done", {"body": "ok"});
  });
};
