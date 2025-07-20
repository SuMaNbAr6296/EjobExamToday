// Question18 :-Find out the string length with out using length property

let str = "JavaScript";
let count = 0;
for (let i = 0; i < str.length; i++) {
    count++;
}
console.log(count);

// Question19 :- State the difference between let ,var & const in JavaScript

// => var can be updated and re-declared.
// => let can be updated but not re-declared.
// => const cannot be updated or re-declared.