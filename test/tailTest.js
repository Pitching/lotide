const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 2);
  });
  it("returns '0' for ['5']", () => {
    assert.strictEqual(tail(['5']), 0); 
  });
  it("returns '3' for [5, 6, 7]", () => {
    assert.strictEqual(tail([5, 6, 7, 8]), 3); 
  });
  it("returns '2' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 2); 
  });
});