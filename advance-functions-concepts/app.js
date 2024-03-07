// Pure Function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3)); // 5

// Random Function
function addRandom(num1) {
    return num1 + Math.random();
}
console.log(addRandom(2));  // Every time it will return different value

// Function with side effect
let previousResult = 0;
function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}
console.log(addMoreNumbers(1, 5)); // 6

// Function with side effect
const hobbies = ['Sports', 'Cooking'];
function printHobbies(h) {
    h.push('Programming');
    console.log(h);
}
printHobbies(hobbies); // ['Sports', 'Cooking', 'Programming']

// Factory Function i.e. function that return another function
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19); // Returns a calculateTax function with tax 0.19
const calculateIncomeTaxAmount = createTaxCalculator(0.25); // Returns a calculateTax function with tax 0.25

console.log(calculateVatAmount(100)); // 19
console.log(calculateIncomeTaxAmount(100)); // 25

// Function closure
let userName = 'Max';
function greetUser() {
    /**
     * We do refer to that userName variable inside of our function but when the function executes, it reaches out to 
     * that surrounding lexical environment to which it holds
     */
    let name = userName;
    console.log('Hi! ' + name);
}
userName = "Manual";
greetUser();// Hi! Manual

// Function closure: inner environment wins over the outer environment
function greet_User() {
    let name = 'Rajan';
    console.log('Hi! ' + name);
}
let name = "Dangi";
greet_User();// Hi! Rajan

// IIFE: Immediately Invoked Function Expression
(function () {
    var age = 30;
    console.log(age);
})();
//console.log(age); // ReferenceError: age is not defined

// Nowdays we use block scope to achieve the same
{
    let age = 30;
    console.log(age);
}
// console.log(age); // ReferenceError: age is not defined


/**
 * Recursion
 * ----------
 * Recursion is a technique where a function calls itself to solve a problem.
 */
function powerOf(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(powerOf(2, 3)); // 2 * 2 * 2 = 8

function powerOfRecursion(x, n) {
    if (n === 1) {
        return x;
    }

    return x * powerOfRecursion(x, n - 1);
}
console.log(powerOfRecursion(2, 3)); // 2 * 2 * 2 = 8


const myself = {
    name: 'Max',
    friends: [
        {
            name: 'Manuel',
            friends: [
                {
                    name: 'Chris',
                    friends: [
                        {
                            name: 'Harry'
                        },
                        {
                            name: 'Amelia'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Julia'
        }
    ]
};
let i = 0;
function printFriendNames(person) {
    const collectedNames = [];
    if (!person.friends) {
        return [];
    }
    for (const friend of person.friends) {
        collectedNames.push(friend.name);
        // console.log('frine name push:', friend.name);
        // console.log(i++);
        // console.log(...printFriendNames(friend));
        collectedNames.push(...printFriendNames(friend));
    }
    return collectedNames;
}
console.log(printFriendNames(myself)); // ["Manuel", "Chris", "Harry", "Amelia", "Julia"]
