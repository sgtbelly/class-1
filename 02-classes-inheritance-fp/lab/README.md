![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======

#### List Module
  * implement a full List constructor using a constructor function
  * implement the length property
  * implement the following methods on the list constructor
    * `push()
    * `pop()
    * `shift()
    * `unshift()
    * `splice()
    * `slice()
    * `forEach()
    * `map()
    * `filter()
    * `reduce()
  * Do not use any built-in array methods to do this
  * Re-Implement with a factory function
  * Re-Implement using a Class definition
  
## Testing
Create a NodeJS module in the \_\_test\_\_/ directory named `list.test.js` that asserts the correctness of the list module.

Use the `describe` and `it` (or `test`) methods to define descriptive tests and increase readablity
Each `it` callback should aim to test a small, well defined, feature of a function - this may include:
  * tests that ensure the list module functions correctly with error-check parameters
  * tests that the correct errors are thrown with invalid arguments exist
  * tests to ensure that the list module functions return the correct results when invoked with valid arguments

##  Documentation
Include your travis badge at the top of your `README.md` file
In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.
