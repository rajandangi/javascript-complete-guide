// Best case: O(1) 
// Worst case: O(n)
function getMin(numbers) { //[3,1,2]
    if (!numbers.length) { // 1 execution
        throw new Error('should not be an empty array');
    }
    let currentMinimum = numbers[0];// 1 execution

    for (let i = 1; i < numbers.length; i++) { // 1 executions
        if (numbers[i] < currentMinimum) { // 2 executions
            currentMinimum = numbers[i]; // 1 execution
        }
    }

    return currentMinimum; // 1 execution
}

// Time complexity: c1+n*c2+c3 = O(n)= Linear time complexity


// Best case: O(n^2)
// Worst case: O(n^2)
// Average case: O(n^2)
function getMin2(numbers) {
    if (!numbers.length) {
        throw new Error('should not be an empty array');
    }

    for (let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i]; // n times execution
        for (let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j]; // n times execution

            if (outerElement > innerElement) {
                // swap
                numbers[i] = innerElement;
                numbers[j] = outerElement;// [1,3,2] for the first iteration

                outerElement = numbers[i];// 1
                innerElement = numbers[j];// 3
            }
        }
    }
    return numbers[0];
}
// Time complexity: n*n=O(n^2) = Quadratic time complexity

const testNumbers = [3, 1, 2, 10, 10, 1];
const min = getMin(testNumbers);
const min2 = getMin2(testNumbers);

console.log(min);
console.log(min2);