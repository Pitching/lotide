const _ = require('../index');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});

// assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);