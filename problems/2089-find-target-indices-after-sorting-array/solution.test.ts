import { test } from "node:test";
import assert from "node:assert/strict";
import { targetIndices } from "./solution.ts";

// Remova o `todo: true` quando a solução estiver pronta.
test("exemplo 1", { todo: true }, () => {
    assert.deepEqual(targetIndices([1, 2, 5, 2, 3], 2), [1, 2]);
});

test("exemplo 2", { todo: true }, () => {
    assert.deepEqual(targetIndices([1, 2, 5, 2, 3], 3), [3]);
});

test("exemplo 3", { todo: true }, () => {
    assert.deepEqual(targetIndices([1, 2, 5, 2, 3], 5), [4]);
});
