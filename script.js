const sayHello = () => {
    for (let i = 0; i < 5; i++) {
        console.log('Hello, World!');
    }
    //alert('Greetings from script.js!');
}

sayHello()

let names = [
    'Alice',
    'Bob',
    'Charlie',
    'Deborah',
    'Evan',
    'Fiona',
    'George',
    'Hannah',
    'Isaac',
    'Jenny'
];

names.forEach(name => {
    console.log(name);
});

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// This is Javascript the best language in the fucking world
