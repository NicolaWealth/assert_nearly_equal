import assert from "assert";
import {assertNearlyEqual} from './assert_nearly_equal.default';

describe('assertNearlyEqual', () => {
  it('basics', () => {
    // Nearly equal with negative delta
    assert.doesNotThrow(()=> assertNearlyEqual(0.0000004, 0.0000005, "test"));
    // Nearly equal with positive delta
    assert.doesNotThrow(()=> assertNearlyEqual(0.0000005, 0.0000004, "test"));
    // Exactly equal with zero delta
    assert.doesNotThrow(()=> assertNearlyEqual(5, 5, "test"));
    // Not nearly equal throws correct error message
    assert.throws(()=> assertNearlyEqual(0.000004, 0.000005, "test"), /test: 0.000004 not nearly equal to 0.000005/);
  });
});