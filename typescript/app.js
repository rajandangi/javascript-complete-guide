"use strict";
// class User {
//     name: string; // public by default
//     private age: number;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // this is same as above in shorthand way
    print() {
        console.log(this.name);
    }
}
class Admin extends User {
    constructor(name, age, permission) {
        super(name, age);
        this.permission = permission;
    }
}
const userObj = new User('Rajan', 30);
console.log(userObj.name);
userObj.print();
// console.log(user.age); // not allowed
const num1InputEL = document.getElementById('num1'); //either use this or the one below
const num2Input = document.getElementById('num2');
const buttonEl = document.querySelector('button');
function add(a, b) {
    return a + b;
}
// or we can use enum
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
;
function printResult(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
let results = [];
buttonEl.addEventListener('click', () => {
    const num1 = +num1InputEL.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    // printResult(results);
    //--
    results[0].print();
    //---
    // printResult(result, 'console');
    // printResult(result, 'alert');
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
    // printResult(result,'window'); // not allowed
});
// Generics Type
function logAndEcho(val) {
    console.log(val);
    return val;
}
console.log(logAndEcho('Hi there!').split(' '));
