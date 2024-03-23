function isEvenOrOdd(number) { // constant time complexity O(1)
    // const result = number % 2;
    // if (result === 0) {
    //     return 'even';
    // }
    // return 'odd';
    return number % 2 === 0 ? 'even' : 'odd';
}
// Constant time complexity = O(1)

console.log(isEvenOrOdd(10)); // even
console.log(isEvenOrOdd(11)); // odd