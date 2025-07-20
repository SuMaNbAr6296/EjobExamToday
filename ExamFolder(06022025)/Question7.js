// Question 7 :- WAP find out maximum and minimum number from a range of number 50-300

let max = 0;
let min = 300;
for (let i = 50; i <= 300; i++) {
    if (i > max) {
        max = i;
    }
    if (i < min) {
        min = i;
    }
}
console.log("Max number is : " + max);
console.log("Min number is : " + min);