// Question:-2 => WAP check a number whether it is Prime or not ?

let num = 11;
let count = 0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        count = 1;
        break;
    }
}
if (count == 0) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}