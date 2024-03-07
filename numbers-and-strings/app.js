// This is the highest possible number in JavaScript
const max = Number.MAX_SAFE_INTEGER;
console.log(max);

// Max value in JavaScript
const maxValue = Number.MAX_VALUE;
console.log(maxValue);

// Javascript Internally uses 64-bit floating point representation
const num1 = 0.2;
const num2 = 0.4;
console.log(num1 + num2);//0.6000000000000001

// This will fire else block
if (num1 + num2 === 0.6) {
    console.log('Equal');
} else {
    console.log('Not Equal'); // Not Equal
}


//function to get random number between two numbers (min and max)
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomIntBetween(5, 10));