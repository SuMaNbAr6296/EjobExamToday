// Question16:- What is hoisting ? Why var is called hoisting variable with example

// => Hoisting :- It is a JavaScript mechanism where variables and functions are moved to the top of their current scope before code execution.

// var is called hoisting variable because it is moved to the top of their current scope before code execution

console.log(a);
var a = 10;
console.log(a);

// Output
// undefined
// 10

// Question17:- What is the difference between find() ,filter() ,map() with proper example

 // find() :- It returns the first element in an array that satisfies the provided testing function.
/*
example :-
const arr = [1, 2, 3, 4, 5];
const result = arr.find((num) => num > 3);
console.log(result); // Output: 4
*/

// filter() :- It returns all the elements in an array that satisfy the provided testing function.
/* example :-
const arr = [1, 2, 3, 4, 5];
const result = arr.filter((num) => num > 3);
console.log(result); // Output: [4, 5]
*/

// map() :- It returns a new array with the results of calling a provided function on every element in the calling array.
/*
example :-
const arr = [1, 2, 3, 4, 5];
const result = arr.map((num) => num * 2);
console.log(result); // Output: [2, 4, 6, 8, 10]
*/
