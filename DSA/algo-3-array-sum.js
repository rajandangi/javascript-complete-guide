function sumUp(numbers) {
    let sum = 0; // 1 execution

    for (let i = 0; i < numbers.length; i++) { // n executions
        sum += numbers[i];
    }

    return sum; // 1 execution
}
// Linear time complexity = O(n)
const array = [1, 2, 3];

console.log(sumUp(array)); //6