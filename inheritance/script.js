/*class Person {
    talk(){
        return 'Talking';
    }
}

const me = new Person();

//console.log(me.talk());



class SuperMan extends Person{
    fly(){
        return 'Flying'
    }
}

const you = new SuperMan();

console.log(you.fly());
console.log(you.talk());*/

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}

const julia = new Person('Julia', 21);
julia.greet();

console.log(Object.getPrototypeOf(julia) === Person.prototype);