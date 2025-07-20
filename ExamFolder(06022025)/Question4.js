// Question4:-WAP check a number whether it is Armstrong or not ?

let num = 1634;
let sum = 0;
let temp = num;
while (num > 0) {
    let rem = num % 10;
    sum = sum + rem * rem * rem *rem;
    num = parseInt(num / 10);
}
if (temp == sum) {
    console.log("Armstrong");
} else {
    console.log("Not Armstrong");
}