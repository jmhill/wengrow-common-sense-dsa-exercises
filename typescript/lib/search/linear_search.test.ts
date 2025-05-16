import { linearSearch } from "./linear_search";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

describe("linearSearch", () => {
  it("returns not found on empty haystack", () => {
    const needle = "hello";
    const haystack: string[] = [];

    const result = linearSearch(needle, haystack);

    assert.equal(result, null);
  });

  it("returns null if needle not found in haystack", () => {
    const needle = "hello";
    const haystack = ["world"];

    const result = linearSearch(needle, haystack);

    assert.equal(result, null);
  });

  it("returns the location of the needle in the haystack if the element exists", () => {
    const needle = "hello";
    const haystack = ["hello", "world"];

    const result = linearSearch(needle, haystack);

    assert.equal(result, 0);
  });

  it("returns null if needle is empty-ish value", () => {
    const needle = "";
    const haystack = ["hello", "world"];

    const result = linearSearch(needle, haystack);

    assert.equal(result, null);
  });

  it("returns correct location of needle if needle and haystack are numbers", () => {
    const needle = 1;
    const haystack = [0, 1];

    const result = linearSearch(needle, haystack);

    assert.equal(result, 1);
  });

  it("allows for a custom search comparison callback function", () => {
    const needle = { key: "123" };
    const haystack = [{ key: "1" }, { key: "2" }, { key: "123" }];

    const result = linearSearch(needle, haystack, (needle, item) => {
      return needle.key === item.key;
    });

    assert.equal(result, 2);
  });

  it("returns null if no item found via custom callback", () => {
    const needle = { key: "123" };
    const haystack = [{ key: "1" }, { key: "2" }, { key: "3" }];

    const result = linearSearch(needle, haystack, (needle, item) => {
      return needle.key === item.key;
    });

    assert.equal(result, null);
  });
});
