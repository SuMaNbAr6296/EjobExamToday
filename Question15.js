// Question15 :- Difference between map() vs for loop with example

// Map
let arr = [1, 2, 3, 4, 5];
let newarr = arr.map((val) => val * 2);
console.log(newarr);
/*
==> Used specifically to transform each element in an array.
=> Returns a new array with the transformed values.
*/

// For loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
}
/*
=> Used to iterate over an array.
=> Returns undefined.
*/

