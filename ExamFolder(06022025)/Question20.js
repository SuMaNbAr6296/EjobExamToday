/*Question20:-
var empDataSet =[
{'empnno':1001,'ename':'john','doj':'12-12-2012','sal':12000},
{'empno':1002,'ename':'smith','doj':'23-12-2002','sal':11000},
{'empno':1003,'ename':'michael','doj':'21-08-22','sal':9000},
{'empno':1004,'ename':'Diana','doj':'01-01-23','sal':22000},
{'empno':1005,'ename':'Anjan','doj':'12-08-21','sal':14000}
];

Task 1: sort all employees by their salary in ascending and descending order.
Task 2: show those employees whose slaary is between 12k-15k.
Task 3: sort all employees by their doj in newest to oldest.
Task 3: show total work experience of all employees in json view.
Task 4: Organization has decided to provide 2% extra exgratia to
those employees who are working more than 8 yrs in the same.
Show their total salary .
Task 5: select those employees whose name starts with 'd'.
Task 6: select those employees name contains 'an'.
*/

// Task 1
let empDataSet = [
    {
        empno: 1001,
        ename: "john",
        doj: "12-12-2012",
        sal: 12000,
    },
    {
        empno: 1002,
        ename: "smith",
        doj: "23-12-2002",
        sal: 11000,
    },
    {
        empno: 1003,
        ename: "michael",
        doj: "21-08-22",
        sal: 9000,
    },
    {
        empno: 1004,
        ename: "Diana",
        doj: "01-01-23",
        sal: 22000,
    },
    {
        empno: 1005,
        ename: "Anjan",
        doj: "12-08-21",
        sal: 14000,
    },
];


// Task 1
empDataSet.sort((emp1, emp2) => {
    if (emp1.sal > emp2.sal) {
        return 1;
    } else {
        return -1;
    }
});
console.log("Ascending order");
console.log(empDataSet);

empDataSet.sort((emp1, emp2) => {
    if (emp1.sal > emp2.sal) {
        return -1;
    } else {
        return 1;
    }
});
console.log("Descending order");
console.log(empDataSet);

// Task 2
empDataSet.filter((emp) => {
    if (emp.sal > 12000 && emp.sal < 15000) {
        console.log(emp);
    }
});


// Task 3
empDataSet.sort((emp1, emp2) => {
    let date1 = new Date(emp1.doj);
    let date2 = new Date(emp2.doj);
    return date2 - date1;
});

// Task 4
empDataSet.filter((emp) => {
    let date1 = new Date(emp.doj);
    let date2 = new Date();
    let diff = date2 - date1;
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    if (years > 8) {
        let extra = (emp.sal * 2) / 100;
        emp.sal = emp.sal + extra;
    }
    console.log(emp);
});

// Task 5
empDataSet.filter((emp) => {
    if (emp.ename.startsWith("d")) {
        console.log(emp);
    }
});

// Task 6
empDataSet.filter((emp) => {
    if (emp.ename.includes("an")) {
        console.log(emp);
    }
});
