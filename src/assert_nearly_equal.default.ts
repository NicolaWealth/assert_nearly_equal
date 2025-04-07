import assert from "assert";

export const assertNearlyEqual = (actual: number, expected: number, errorMsg: string, epsilon = 0.000001) => {
  let delta = actual - expected;
  if (delta < 0) {
    delta = -delta;
  }
  assert.ok(delta < epsilon, `${errorMsg}: ${actual} not nearly equal to ${expected}`);
};
