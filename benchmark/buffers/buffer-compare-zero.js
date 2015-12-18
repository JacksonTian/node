'use strict';

var common = require('../common.js');

var bench = common.createBenchmark(main, {
  millions: [1]
});

function main(conf) {
  var iter = (conf.millions >>> 0) * 1e6;
  var b0 = new Buffer(0);
  var b1 = new Buffer(0);

  bench.start();
  for (var i = 0; i < iter; i++) {
    Buffer.compare(b0, b1);
  }
  bench.end(iter / 1e6);
}
