// Question 5 :- Print the following series : 0 4 18 48 100

/*
1*1*0 = 0
2*2*1 = 4
3*3*2 = 18
4*4*3 = 48
5*5*4 = 100
*/

for (let i = 1; i <= 5; i++) {
    console.log(i * i * (i - 1));
}