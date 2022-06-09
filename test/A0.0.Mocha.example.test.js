/**
 * @description         This class shows basic usage of Mocha testing framework.
 */

//01. Call library modules.
const assert = require('assert'); // Declare an assertion library module.
const { beforeEach } = require('mocha');

//02. Create an example class with some logic inside.
class exampleClass {
    func1() {
        return 'random value 1';
    }
    func2() {
        return 'random_value_2';
    }
}

//03. Declare local variables.
let exam;

//04. Declare the "beforeEach" function. This function will be executed before every "it" test.
beforeEach(() => {
    exam = new exampleClass(); // Declare a constructor for exampleClass.
});

//05. Create a test suite using "describe" function.
describe('name of the describe', () => {
    //06. Add tests using "it" function.
    it('This example shows how the assert will pass', () => {
        assert.equal(exam.func1(), 'random value 1'); // Make an assertion to verify that the two values are equal.
    });
    xit('This example shows how the assert will fail, but the test will be skipped because the "X" symbol is added like a prefix for "it".', () => {
        assert.equal(exam.func1(), 'random value'); // Make an assertion to verify that the two values are equal.
    });
    it('This example shows how the assert will pass', () => {
        assert.equal(exam.func2(), 'random_value_2'); // Make an assertion to verify that the two values are equal.
    });
});