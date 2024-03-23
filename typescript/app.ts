const num1InputEL = document.getElementById('num1') as HTMLInputElement; //either use this or the one below
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonEl = document.querySelector('button') as HTMLButtonElement;

function add(a: number, b: number) {
    return a + b;
}

function printResult(result) {
    console.log('Result: ' + result);
}
// const result = add(5, 3);
// console.log(result);

// printResult(result);

buttonEl.addEventListener('click', () => {
    const num1 = +num1InputEL.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    printResult(result);
});