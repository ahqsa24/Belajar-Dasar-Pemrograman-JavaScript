import sum from "./index.js";
import { strict as assert } from "node:assert";
import test from "node:test";

test("sum should return the sum of two numbers", t => {
  // Test case 1: Sum of positive numbers
  assert.equal(sum(1, 7), 8, "1 + 7 should equal 8");

  // Test case 2: Sum of negative numbers
  assert.equal(sum(-1, -7), 0, "-1 + -7 should equal 0");

  // Test case 3: Sum of positive and negative number
  assert.equal(sum(1, -7), 0, "1 + (-7) should equal 0");
  assert.equal(sum(-1, 7), 0, "(-1) + 7 should equal 0");

  // Test case 4: Sum with zero
  assert.equal(sum(0, 7), 7, "0 + 7 should equal 7");
  assert.equal(sum(7, 0), 7, "7 + 0 should equal 7");

  // Test case 5: Sum of number and string number
  assert.equal(sum(1, "7"), 0, "1 + '7' should equal 0");
  assert.equal(sum("1", 7), 0, "'1' + 7 should equal 0");

  // Test case 6: Sum with string number
  assert.equal(sum("1", "7"), 0, "1 + '7' should equal 0");
});