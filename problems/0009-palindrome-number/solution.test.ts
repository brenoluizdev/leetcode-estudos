import { test } from "node:test";
import assert from "node:assert/strict";
import { isPalindrome } from "./solution.ts";

test("exemplo 1", () => {
    assert.deepEqual(isPalindrome(121), true);
});

test("exemplo 2", () => {
    assert.deepEqual(isPalindrome(-121), false);
});

test("exemplo 3", () => {
    assert.deepEqual(isPalindrome(10), false);
});
