// Question6 :- WAP check a Year whether it is Leap Year or not ?

let year = 2000;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}

