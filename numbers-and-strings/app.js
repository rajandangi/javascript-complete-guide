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


// Tagged Template Literal - A function that can be used to parse template literals with a function
function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);

    let priceCategory = 'cheap';
    if (productPrice > 20) {
        priceCategory = 'highly priced';
    }
    console.log(strings[2]);//This product is
    return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}
productName = 'Javascript Course';
productPrice = 100;
const productOutput = productDescription`This product is (${productName}) and it costs ${productPrice}. That's all`;
console.log(productOutput);


// Regular Expressions ("RegEx")
const regex = /hello/;
console.log(regex.test('hello'));//true
console.log(regex.test('Hello'));//false
console.log(regex.test('hello world'));//true
console.log('------------------')

const regex1 = /(h|H)ello/;
console.log(regex1.test('hello'));//true
console.log(regex1.test('Hello'));//true

console.log('------------------')
const regex2 = /.ello/;
console.log(regex2.test('hello'));//true
console.log(regex2.test('Hello'));//true
console.log(regex2.test('This is anything mello'));//true

console.log('------------Email Regex--------')
const emailRegex = /^\S+@\S+.\S+$/; // \-escape character, \S- non-whitespace character, + - one or more
console.log(emailRegex.test('rajandangi649@gmail.com'));//true

console.log('------------exec function--------')
console.log(regex.exec('hello'));//[ 'hello', index: 0, input: 'hello', groups: undefined ]
console.log(regex.exec('Hello'));//null
console.log(regex.exec('Hello hello'));//[ 'hello', index: 6, input: 'Hello hello', groups: undefined ]


console.log('------------or you can use match function--------')
console.log('hello'.match(regex));//[ 'hello', index: 0, input: 'hello', groups: undefined ]