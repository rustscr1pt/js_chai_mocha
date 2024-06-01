// Required libs : mochajs & chaijs
// File should be named as test.js otherwise if u run mocha test it won't work.
// mocha watch -> to check if file was changed and if it's true => run tests again

function sayName(name) {
    let message = `My name is ${name}`;
    return message
}

function sumAllNums(array) {
    let sum = 0;
    array.map((num) => {sum += num});
    return sum
}

// Better to use 4.2.0 version so there would be no problems with import.
let assert = require('chai').assert

// In describe we give a name to the block
describe('sayName', function() {
    // Then an additional description.
    it("Get a phrase with a new name", function() {
        // With using assert from Chai we control results.
        assert.typeOf(sayName("Egor"), 'string')
    })
});

describe('sumAllNums', function() {
    it("Check if all numbers in array are greater than 10", function() {
        assert.isAtLeast(sumAllNums([1, 2, 3, 10]), 10, "Sum of numbers are greater than 10")
    })
})
