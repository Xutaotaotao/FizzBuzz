"use strict";
let fizzBuzz = require("../lib/fizzbuzz.js");

describe("FizzBuzz",function () {
    it("returns the number given number not divisible by neither 3 or 5",function () {
        let number = 1;
        let result = fizzBuzz(number);
        expect(result).toEqual("1");
    });
});