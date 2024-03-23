const age = [30, 39, 54];

// [30, 39, 54] -> [30, 39, 54, 60]
// [0, 1, 2] -> [0, 1, 2, 3]
age.push(60); // constant time complexity O(1)


// array: [30,39,54] -> [60,30,39,54]
// Index: [0,1,2] -> [0,1,2,3]
age.unshift(60); // Linear time complexity O(n)


const myAge = age[1]; // constant time complexity O(1)



// --
const namePopularity = [
    { userName: 'Rajan', usages: 10 },
    { userName: 'Hari', usages: 6 },
    { userName: 'Shyam', usages: 5 }
];
const rajanUsages = namePopularity.find(user => user.userName === 'Rajan').usages; // Linear time complexity O(n)
// Best case: O(1)
// Worst case: O(n)
// Average case: O(n)

//-----------------
const nameMap = {
    'Rajan': 10,
    'Hari': 6,
    'Shyam': 5
};
const rajanUsages2 = nameMap['Rajan']; // constant time complexity O(1)
// Best case: O(1)
// Worst case: O(1)
// Average case: O(1)