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

