import assert from "assert";

export const assertNearlyEqual = (actual: number, expected: number, msg: string, epsilon = 0.000001) => {
  let delta = actual - expected;
  if (delta < 0) {
    delta = -delta;
  }
  assert.ok(delta < epsilon, `${msg}: ${actual} not nearly equal to ${expected}`);
};
