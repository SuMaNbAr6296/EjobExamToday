// Question3 :- WAP check a number whether it is Palindrome or not ?

let num = 121;
let rev = 0;
let temp = num;
while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
}
if (temp == rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}