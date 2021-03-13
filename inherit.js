class Parent{
    constructor(){
        this.fatherName = "Farid Ahmed"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name
    }
}
const child1 = new Child("Jowel");
const child2 = new Child("Aaman");
console.log(child1);
console.log(child2);