![Tests Passing](https://github.com/NicolaWealth/assert_nearly_equal/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fassert_nearly_equal%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `assert_nearly_equal` package asserts that a given numerical expected value and actual value are approximately equal.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `assert_nearly_equal` package with npm:

`npm install @nicolawealth/assest_nearly_equal`

# Usage
This package should be used for asserting or comparing floating point values which need not be exactly equal due to differences caused by rounding or truncating, but ensuring they are nearly equal (within an acceptable error bound).

# Interface
The package exports one function `assertNearlyEqual(actual, expected, errorMsg, epsilon)` where `actual` and `expected` are the two values to be compared. `errorMsg` is the string message which will be displayed if the assert fails. `epsilon` is the (inclusive) upperbound on the difference between the `actual` and `expected` values and is defaulted to `0.000001` if not specified. 

# Testing
Tests can be found in `assest_nearly_equal.test.ts` located in `asset_nearly_equal/src` and should be run with sinon, mocha and nyc.
