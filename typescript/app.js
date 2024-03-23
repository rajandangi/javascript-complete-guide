var num1InputEL = document.getElementById('num1'); //either use this or the one below
var num2Input = document.getElementById('num2');
var buttonEl = document.querySelector('button');
function add(a, b) {
    return a + b;
}
function printResult(result) {
    console.log('Result: ' + result);
}
// const result = add(5, 3);
// console.log(result);
// printResult(result);
buttonEl.addEventListener('click', function () {
    var num1 = +num1InputEL.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    printResult(result);
});
