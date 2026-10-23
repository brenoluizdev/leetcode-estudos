import { test } from "node:test";
import assert from "node:assert/strict";
import { romanToInt } from "./solution.ts";

test("exemplo 1", () => {
    assert.deepEqual(romanToInt('III'), 3);
});
test("exemplo 2", () => {
    assert.deepEqual(romanToInt('LVIII'), 58);
});
test("exemplo 1", () => {
    assert.deepEqual(romanToInt('MCMXCIV'), 1994);
});