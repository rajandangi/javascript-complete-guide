### Pure Function
```javascript
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3)); // 5
```

### Random Function (Impure function)
```javascript
function addRandom(num1) {
    return num1 + Math.random();
}
console.log(addRandom(2));  // Every time it will return different value
```

### Function with side effect
```javascript
let previousResult = 0;
function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}
console.log(addMoreNumbers(1, 5)); // 6
```

### Function with side effect
```javascript
const hobbies = ['Sports', 'Cooking'];
function printHobbies(h) {
    h.push('Programming');
    console.log(h);
}
printHobbies(hobbies); // ['Sports', 'Cooking', 'Programming']
```
** Final Note: Always aim for a pure function.

### Factory Function i.e. function that return another function
