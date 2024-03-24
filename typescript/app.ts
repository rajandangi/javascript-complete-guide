// class User {
//     name: string; // public by default
//     private age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
interface Greetable {
    name: string;
}

interface Printable {
    print(): void;
}

class User implements Greetable, Printable {
    constructor(public name: string, private age: number) { } // this is same as above in shorthand way

    print() {
        console.log(this.name);
    }
}

class Admin extends User {
    constructor(name: string, age: number, private permission: string[]) {
        super(name, age);
    }
}
const userObj = new User('Rajan', 30);
console.log(userObj.name);
userObj.print();
// console.log(user.age); // not allowed


const num1InputEL = document.getElementById('num1') as HTMLInputElement; //either use this or the one below
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonEl = document.querySelector('button') as HTMLButtonElement;

function add(a: number, b: number) {
    return a + b;
}
// Type Aliases must be start with Capital letter
type PrintMode = 'console' | 'alert';
// or we can use enum
enum OutputMode { CONSOLE, ALERT };

function printResult(result: string | number, printMode: OutputMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    } else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
// const result = add(5, 3);
// console.log(result);

// printResult(result);
interface CalculationContainer {
    res: number,
    print(): void;
}

type CalculationResults = CalculationContainer[];

let results: CalculationResults = [];

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
function logAndEcho<T>(val: T) {
    console.log(val);
    return val;
}
console.log(logAndEcho('Hi there!').split(' '));