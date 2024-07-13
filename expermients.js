const timeToRepeat = 15; // 15 - 5 for Heello = 2 UTF16s * 5 puppies = 10 Bytes
const character = '🐶'; // 2 UTF16s

// let answer = "";
// for (let i = 0; i < timeToRepeat; i++) {
//     answer += character;
// }

const greeting = "Hello";
console.log(greeting.length);
console.log(greeting.padStart(timeToRepeat, character));
console.log(greeting.padStart(timeToRepeat, character).length);

function addTwo(number) {
    return number + 2;
}

console.log(addTwo(5));

function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I'm extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

const person = {
    firstName: "Brian",
    lastName: "Holt"
};

const propertyName = "firstName";

console.log(person.firstName);
console.log(person[propertyName]);

const person1 = {
    name : "Angie",
    ageRange : "25-35",
};
const person2 = {
    name : "Francesca",
    ageRange : "65-75",
};


function suggestMusic(person) {
    if (person.ageRange === "25-35") {
        console.log("We think you'll like Daft Punk your crazy millenial.");
    } else if (person.ageRange === "65-75") {
        console.log("You're obviously going to like Johnny Cash. He walks the line.");
    } else {
        console.log("Uh, maybe try David Bowie? Everyone likes David Bowie, right?");
    }
}

suggestMusic(person1);
suggestMusic(person2); 


const dayofWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

dayofWeek.forEach(day => {
    console.log(day);
});

const days = dayofWeek.join(" | ");
console.log(days);

const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
];

// method 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// method 2
cities.forEach(city => {
    console.log(city);
});

// DOM - Document Objetct Model

Array.from(document.getElementsByClassName("red-square")).forEach(square => {
    square.style.backgroundColor = "limegreen";
});

document.querySelector(".red-square").style.backgroundColor = "skyblue";

const elementsToChange = document.querySelectorAll(".js-target");
elementsToChange.forEach(element => {
    element.innerHTML = "Modified by JavaScript!";
});

const button = document.querySelector('.event-button');
button.addEventListener("click", function () {
    // alert("Hey there!");
    console.log('lol');
});