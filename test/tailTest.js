const assert = require('chai').assert;
const assertEqual = require("../assertEqual");
const tail = require("../tail");

describe("#tail", () => {
  
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"].toString());
  });

  it("returns ['Lighthouse'] for [' Lighthouse']", () => {
    assert.deepEqual(tail([" Lighthouse"].toString()), ["Lighthouse"].toString());
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([].toString()), [].toString());
  });
  
  it("returns [6] for [' 6']", () => {
    assert.deepEqual(tail([" 6"].toString()), [6].toString());
  });
});