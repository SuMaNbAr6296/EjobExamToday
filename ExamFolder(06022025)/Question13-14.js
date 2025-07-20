// Question13 :- Difference between Arrow function vs Normal call back with example

// Arrow function

let add = (a, b) => a + b;
console.log(add(10, 20));

/*
=> No need to use the function keyword.
=> No need to use {} or return if it’s a single expression.
*/

// Normal function

let add1 = function (a, b) {
    return a + b;
}
console.log(add1(10, 20));

/*
=> Need to use the function keyword.
=> Need to use {} or return if it’s a single expression.
*/


// Question 14 :-Constuct same logic for sum(2,3) & sum(2)(3) will produce same result using Arrow function

let sum = (a, b) => a + b;
console.log(sum(2, 3));
console.log(sum(2)(3));

