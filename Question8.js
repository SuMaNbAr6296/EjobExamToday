// Question 8 :- WAP check a String whether it is Palindrome String or Not var x='madam'

let str = "madam";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}
if (str == rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}