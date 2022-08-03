var cl = console.log;
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.getElementById('btn');
var sum = function (n1, n2) {
    return n1 + n2;
};
btn.addEventListener('click', function () {
    cl(sum(+num1.value, +num2.value));
});
// const add = (n1:number,n2:number) => {
//     return n1+n2;
// }
// btn.addEventListener('click', () => {
//     cl(add(+num1.value, +num2.value));
// })
// const onAdd = () => {
//     let n1 = +num1.value;
//     let n2 = +num2.value;
//     cl(n1+n2);
// }
// btn.addEventListener('click', onAdd);
var x = 10; // here we assign value of type number so it assign only by number, if we assign type other than number then it will show error.
// x = 'hello';
x = 20;
// x= true;
var a = "hello"; // here we assign value of type string so it will reassign only by type string, if we assign type other than string then it will show error
a = "javascript";
// a= 30;
// a = true;
var canFly; // only boolean type value will assign, otherwise error will occur
canFly = true;
// canFly = 'no'; >> error
// canFly = 20;  >> error
var person;
person = {
    fname: 'sandhya',
    lname: 'kale',
    age: 24
};
cl(person);
// here we must have to write type of keys without declaring type we cannot add key in object 
// we cannot write less or more keys 
var p1;
p1 = {
    fname: 'neha',
    lname: 'joshi',
    age: 55,
    Child: {
        fname: 'sangram',
        lname: 'joshi',
        age: 20,
        email: 'sangram@gmail.com'
    }
};
cl(p1);
var skills;
skills = ['html', 'css', 'javascript', 'angular'];
var ages;
ages = [25, 35, 40, 60, 15, 10, 65, 30];
// ==================== Ex. 1) ======================
var b = 10;
// b = true;
b = 5;
// b = 'hello typescript'
var canDrive = false;
// canDrive = 15;
// canDrive = 'hello typescript';
canDrive = true;
var product;
product = {
    pName: 'vivo',
    pCategory: 'electronics',
    pPrice: 12000,
    pExp: new Date(2026, 7)
};
cl(product);
var sports;
sports = ['cricket', 'tennis', 'basketball', 'football'];
// function addtwo(n1 : number, n2 : number){
//     return n1+n2;
// }
// cl(addtwo(2, 5));
function add(n1, n2, showResult, phrase) {
    if (showResult === true) {
        // cl(n1+n2);
        var result = n1 + n2;
        cl("".concat(phrase, " ").concat(result));
    }
    else {
        return n1 + n2;
    }
}
btn.addEventListener('click', function () {
    cl(add(+num1.value, +num2.value, false, 'hello'));
});
add(10, 20, true, 'hello');
add(5, 7, false, 'hello ts');
add(2, 5, true, 'the result is');
// ==================== Ex. 2) ======================
var d = false;
// d = 10;
// d = 'typescript';
// d = null;
d = true;
var m; // type 'any >> we can assign value of any type as string, number, boolean.
m = 'hello typescript';
m = true;
m = 30;
var emp;
emp = {
    fname: 'Sujata',
    lname: 'Dhutraj',
    id: 502,
    email: 'sujata@gmail.com'
};
cl(emp);
var cars;
cars = ['creata', 'swift', 'indica', 'suzuki', 'audi'];
var years;
years = [2017, 2005, 1990, 2025, 1995, 2000];
var user;
user = {
    id: 111,
    email: 'swapnil12@gmail.com',
    personalInfo: {
        name: 'Swapnil Kalyankar',
        contact: 1234567890,
        city: 'Nanded'
    }
};
cl(user);
function div(n1, n2, showDiv) {
    if (showDiv === true) {
        cl(n1 / n2);
    }
    else {
        return n1 / n2;
    }
}
div(10, 5, false);
div(100, 2, true);
// let getDiv = div(125, 5, false);
// cl(getDiv);
// let getDiv = div(220, 20, true);
// cl(getDiv);
var getRes = div(200, 5, false);
cl(getRes);
// ==================== Ex. 3) ======================
var n = 'hello';
// n = undefined;
// n = true;
n = 'hello typescript';
// n = 25;
var p; // type 'any
p = 30;
p = 'car';
p = false;
var q;
// q = 'cat';
q = 50;
// q = true;
var person1;
person1 = {
    fname: 'dipali',
    lname: 'nirwal',
    contact: 9764200135
};
cl(person1);
var score;
score = [85, 90, 60, 72, 81, 95];
var fruits;
fruits = ['apple', 'kiwi', 'banana', 'grapes', 'pomegranate'];
var student;
student = {
    fname: 'Avdhut',
    lname: 'More',
    age: 24,
    hobbies: ['reading', 'coding', 'gardening']
};
cl(student);
function sub(n1, n2, showRes) {
    if (showRes === true) {
        cl(n1 - n2);
    }
    else {
        return n1 - n2;
    }
}
sub(450, 50, true);
var Substract = sub(700, 500, false);
cl(Substract);
// ==================== Ex. 4) ======================
var r;
r = true;
// r = 30;
// r = 'This is typescript';
var ab = 50;
// ab = 'This is typescript';
// ab = false;
ab = 70;
var cd;
cd = true;
cd = 12;
cd = 'hello typescript';
var car;
car = {
    make: 'ford',
    color: 'grey',
    year: 2018
};
cl(car);
var empInfo;
empInfo = {
    name: 'Ashwini Shinde',
    id: 107,
    email: 'ash22@gmail.com',
    salary: 45000,
    locality: {
        address: 'new mondha',
        city: 'Nanded',
        state: 'Maharashtra'
    }
};
cl(empInfo);
var players; // array of string
players = ['sachin', 'virat', 'smriti', 'saina', 'ashish'];
var members; // array of number
members = [20, 50, 45, 22, 35, 40];
// ==================== Ex. 5) ======================
var mn = false;
// mn = 23;
mn = true;
// mn = 'hello ts';
var pq;
// pq = 32;
// pq = false;
pq = 'hello ts';
var xy;
xy = 10;
xy = 'hello ts';
xy = true;
var mobile;
mobile = {
    name: 'realme',
    ram: '2gb',
    price: 15000,
    warranty: '1 year',
    battery: {
        batterylife: '6 months'
    }
};
cl(mobile);
function mul(n1, n2, showresult, phrase) {
    if (showresult === false) {
        // cl(n1*n2);
        var result = n1 * n2;
        cl("".concat(phrase, " ").concat(result));
    }
    else {
        return n1 * n2;
    }
}
// mul(5, 10, true);
mul(5, 2, false, 'The multiplication is :');
