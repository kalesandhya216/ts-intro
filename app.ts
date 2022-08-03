
let cl = console.log;


let num1 = document.getElementById('num1')! as HTMLInputElement;
let num2 = <HTMLInputElement>document.getElementById('num2')!;
let btn = document.getElementById('btn')!;


const sum = (n1 : number, n2 : number) => {
    return n1+n2;
}

btn.addEventListener('click', () => {
    cl(sum(+num1.value, +num2.value));
})


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





let x = 10;  // here we assign value of type number so it assign only by number, if we assign type other than number then it will show error.

// x = 'hello';
x=20;
// x= true;

let a = "hello"; // here we assign value of type string so it will reassign only by type string, if we assign type other than string then it will show error

a = "javascript";

// a= 30;
// a = true;


let canFly : boolean; // only boolean type value will assign, otherwise error will occur

canFly = true;
// canFly = 'no'; >> error
// canFly = 20;  >> error


let person : {
    fname : string,
    lname : string,
    age : number
}

person = {
    fname : 'sandhya',
    lname : 'kale',
    age : 24
}

cl(person);

// here we must have to write type of keys without declaring type we cannot add key in object 
// we cannot write less or more keys 


let p1 : {
    fname : string,
    lname : string,
    age : number,
    Child : {
        fname : string,
        lname : string,
        age : number,
        email : string
    }
}

p1 = {
    fname : 'neha',
    lname : 'joshi',
    age : 55,
    Child : {
        fname : 'sangram',
        lname : 'joshi',
        age : 20,
        email : 'sangram@gmail.com'
    }
}

cl(p1);


let skills : string[];

skills = ['html', 'css', 'javascript', 'angular'];


let ages : number[];

ages = [25, 35, 40, 60, 15, 10, 65, 30];







// ==================== Ex. 1) ======================


let b = 10;

// b = true;
b = 5;
// b = 'hello typescript'

let canDrive = false;

// canDrive = 15;
// canDrive = 'hello typescript';
canDrive = true;


let product : {
    pName : string,
    pCategory : string,
    pPrice : number,
    pExp : Date
}

product = {
    pName : 'vivo',
    pCategory : 'electronics',
    pPrice : 12000,
    pExp : new Date(2026, 7)
}

cl(product);


let sports : string[];

sports = ['cricket', 'tennis', 'basketball', 'football'];


// function addtwo(n1 : number, n2 : number){
//     return n1+n2;
// }

// cl(addtwo(2, 5));

function add(n1 : number, n2 : number, showResult : boolean, phrase : string){
    if(showResult === true){
        // cl(n1+n2);
        let result = n1+n2;
        cl(`${phrase} ${result}`)
    }else{
        return n1+n2;
    }
}


btn.addEventListener('click', () => {
    cl(add(+num1.value, +num2.value, false, 'hello'));
})


add(10, 20, true, 'hello');
add(5, 7, false, 'hello ts');
add(2, 5, true, 'the result is');


// ==================== Ex. 2) ======================


let d = false;

// d = 10;
// d = 'typescript';
// d = null;
d = true;


let m; // type 'any >> we can assign value of any type as string, number, boolean.

m = 'hello typescript';
m = true;
m = 30;


let emp : {
    fname : string,
    lname :string,
    id : number,
    email : string
}


emp = {
    fname : 'Sujata',
    lname : 'Dhutraj',
    id : 502,
    email : 'sujata@gmail.com'
}


cl(emp);


let cars : string[];

cars = ['creata', 'swift', 'indica', 'suzuki', 'audi'];

let years : number[];

years = [2017, 2005, 1990, 2025, 1995, 2000];


let user : {
    id : number,
    email : string,
    personalInfo : {
        name : string,
        contact : number
        city : string
    }
}

user = {
    id : 111,
    email : 'swapnil12@gmail.com',
    personalInfo : {
        name : 'Swapnil Kalyankar',
        contact : 1234567890,
        city : 'Nanded'
    }
}

cl(user);


function div(n1 : number, n2 : number, showDiv : boolean){
    if(showDiv === true){
        cl(n1/n2);
    }else{
        return n1/n2;
    }
}

div(10, 5, false);
div(100, 2, true);

// let getDiv = div(125, 5, false);
// cl(getDiv);

// let getDiv = div(220, 20, true);
// cl(getDiv);

let getRes = div(200, 5, false);
cl(getRes);

// ==================== Ex. 3) ======================

let n = 'hello';

// n = undefined;
// n = true;
n = 'hello typescript';
// n = 25;


let p; // type 'any

p = 30;
p = 'car';
p = false;

let q : number

// q = 'cat';
q = 50;
// q = true;


let person1 : {
    fname : string,
    lname : string,
    contact : number
}

person1 = {
    fname : 'dipali',
    lname : 'nirwal',
    contact : 9764200135
}

cl(person1);


let score : number[];

score = [85, 90, 60, 72, 81, 95];


let fruits : string[];

fruits = ['apple', 'kiwi', 'banana', 'grapes', 'pomegranate'];


let student : {
    fname : string,
    lname : string,
    age : number,
    hobbies : string[];
}

student = {
    fname : 'Avdhut',
    lname : 'More',
    age : 24,
    hobbies : ['reading', 'coding', 'gardening']
}

cl(student);


function sub(n1, n2, showRes : boolean){
    if(showRes === true){
        cl(n1-n2);
    }else{
        return n1-n2;
    }
}


sub(450, 50, true);

let Substract = sub(700, 500, false);
cl(Substract);


// ==================== Ex. 4) ======================

let r : boolean;

r = true;
// r = 30;
// r = 'This is typescript';

let ab = 50;

// ab = 'This is typescript';
// ab = false;
ab = 70;

let cd;

cd = true;
cd = 12;
cd = 'hello typescript';


let car : {
    make : string,
    color : string,
    year : number,
}

car = {
    make : 'ford',
    color : 'grey',
    year : 2018
}

cl(car);


let empInfo : {
    name : string,
    id : number,
    email : string,
    salary : number,
    locality : {
        address : string,
        city : string,
        state : string
    }
}

empInfo = {
    name : 'Ashwini Shinde',
    id : 107,
    email : 'ash22@gmail.com',
    salary : 45000,
    locality : {
        address : 'new mondha',
        city : 'Nanded',
        state : 'Maharashtra'
    }
}

cl(empInfo);


let players : string[];  // array of string

players = ['sachin', 'virat', 'smriti', 'saina', 'ashish'];

let members : number[]; // array of number

members = [20, 50, 45, 22, 35, 40];





// ==================== Ex. 5) ======================


let mn = false;

// mn = 23;
mn = true;
// mn = 'hello ts';


let pq : string;

// pq = 32;
// pq = false;
pq = 'hello ts'


let xy;

xy = 10;
xy = 'hello ts';
xy = true;


let mobile : {
    name : string,
    ram : string,
    price : number,
    warranty : string,
    battery : {
        batterylife : string
    }
}

mobile = {
    name : 'realme',
    ram : '2gb',
    price : 15000,
    warranty : '1 year',
    battery : {
        batterylife : '6 months'
    }
}

cl(mobile);


function mul(n1 : number, n2 : number, showresult : boolean, phrase : string){
    if(showresult === false){
        // cl(n1*n2);
        let result = n1*n2;
        cl(`${phrase} ${result}`);
    }else{
        return n1*n2;
    }   
}

// mul(5, 10, true);
mul(5, 2, false, 'The multiplication is :');