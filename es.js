// Template String
const firstName = "Justin"
const lastName = "TimberLake"
const fullName = firstName +" "+ lastName;
const fullName2 = `${firstName} ${lastName}`

// Multiline

const doubleLine = `I am Jowel Ahmed
I love Javascript
In future i will be a good programmer. 
In Sha Allah`

console.log(doubleLine);

// Arrow Function

let sum =(x,y)=>{
    return x+y;
}
// Arrow Function

let sqr =(x)=> x*5
console.log(sqr(5));

// Spread Operator

const ages1 =[12, 23, 34, 5]
const ages2 = [23, 34, 45, 7]
const ages3 = [77, 89, 90, 100]
const allAges = [...ages1, ...ages2, ...ages3]

console.log(allAges);

const business =600;
const minister = 10000;
const shocib = 200;

const allMoney = [600, 10000, 200]
const taka = Math.max(...allMoney);
console.log(taka);

// Class

class Student{
    constructor(sId, sName){
        this.id =sId;
        this.name = sName;
    }
}
const student1 = new Student(12, "Jowel");
const student2 = new Student(16, "Mamun");
console.log(student1, student2);

// Inherit

class Parent{
    constructor(){
        this.fatherName = "Farid Ahmed"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const child1 = new Child("Aman");
const child2 = new Child("Tanim");
console.log(child1, child2);