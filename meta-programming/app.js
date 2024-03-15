// Library Land
const uid = Symbol();
console.log(uid);

const user = {
    // id: 'p1',
    [uid]: 'p1',
    name: 'Max',
    [uid]: 'p1'
};

// user[uid] = 'p2';

//app land => Using the Library

user.id = 'p2';
// user.uid = 'p2';
console.log(user);

console.log(user[Symbol('uid')]);

// Build own iterator || Own looping Logic
// Any Object with next() method is called iterator
// 1. Symbol.iterator
const company = {
    curEmployee: 0,
    employees: ["Rajan", "Rahul", "Rohit"],
    next() {
        if (this.curEmployee >= this.employees.length) {
            return { value: this.curEmployee, done: true };
        }
        const returnValue = { value: this.employees[this.curEmployee], done: false };
        this.curEmployee++;
        return returnValue;
    }
}

let employee = company.next();
while (!employee.done) {
    console.log(employee.value);
    employee = company.next();
}
console.log('-------------------------------------');

// 2. Generator
// A javascript function which automatically generates an iterator for you
// generator function automatically implements next() method for you
const gCompany = {
    employees: ["Rajan", "Rahul", "Rohit"],
    // getEmployee: function* employeeGenerator() {
    [Symbol.iterator]: function* employeeGenerator() {
        let currentEmployee = 0;
        while (currentEmployee < this.employees.length) {
            yield this.employees[currentEmployee];
            currentEmployee++;
        }
    }
}

// Then we can use the generator function like this
// const it = gCompany.getEmployee();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// But we can also use it in a for of loop if we implement the Symbol.iterator
for (const employee of gCompany) {
    console.log(employee);
}

// spread operator also looks for Symbol.iterator
console.log([...gCompany]);

// Array also has Symbol.iterator implemented
console.log(["Rajan", "Rahul", "Rohit"]);


// Reflect API

const course = {
    title: 'JavaScript - The Complete Guide',
    author: 'Rajan',
};

Reflect.setPrototypeOf(course, {
    toString() {
        return this.title;
    }
});

console.log(course.toString());

// Reflect.deleteProperty(course, 'title');
// console.log(course);

//---------------------

// Proxy API
console.log(course);
// Getters and Setters are used to intercept the access to properties of an object 
// these get and set methods are called traps
const courseHandles = {
    get(obj, propertyName) {
        console.log('property name: ' + propertyName);
        if (propertyName === 'author') {
            return 'Rajan Dangi';
        }
        return obj[propertyName] || 'NOT FOUND';
    },
    set(obj, propertyName, newValue) {
        console.log('Sending data ...');
        if (propertyName === 'rating') {
            return;
        }
        obj[propertyName] = newValue;
    }
}
const pCourse = new Proxy(course, courseHandles);
pCourse.rating = 5;
pCourse.p_rating = 15;

console.log(pCourse.title);
console.log(pCourse.author);
console.log(pCourse.rating, pCourse.p_rating); // NOT FOUND