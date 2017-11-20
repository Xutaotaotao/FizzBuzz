"use strict";
let fizzBuzz = require("../lib/fizzbuzz.js");

describe("FizzBuzz", function () {
    it("returns the number given number not divisible by neither 3 or 5", function () {
        let number = 1;
        let result = fizzBuzz(number);
        expect(result).toEqual("1");
    });
    it("returns the Fizz given number by 3", function () {
        let number = 3;
        let result = fizzBuzz(number);
        expect(result).toEqual("Fizz");
    });
    it("returns the Fizz given number by 5", function () {
        let number = 5;
        let result = fizzBuzz(number);
        expect(result).toEqual("Buzz");
    });
    it("returns the Fizz given number by both 3 and 5", function () {
        let number = 15;
        let result = fizzBuzz(number);
        expect(result).toEqual("FizzBuzz");
    });
});