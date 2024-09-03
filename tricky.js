// {
//   let fruits = ["apple", "banana", "mango", "orange"];

//   fruits.unshift("grape"); // adds from the beginning

//   fruits.pop(); // removes from end

//   let index = fruits.indexOf("banana");
//   if (index !== -1) {
//     fruits[index] = "kiwi"; // replaces on the index
//   }

//   console.log(fruits);
// }

// {
//   let numbers = [1, 2, 3, 4, 5, 6];

//   let evenSquares = numbers.filter((n) => n % 2 === 0).map((n) => n * n);

//   console.log(evenSquares);
// }

// {
//   let numbers = [10, 20, 30, 40, 50];

//   let sum = numbers.reduce((total, current) => total + current, 0);

//   console.log(sum);
// }

// {
//   let colors = ["red", "blue", "green", "yellow"];

//   colors.splice(1, 2);

//   colors.splice(1, 0, "purple", "orange");

//   console.log(colors);
// }

// {
//   let people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Jim", age: 35 },
//     { name: "Jack", age: 40 },
//   ];

//   let person = people.find((p) => p.age > 30);

//   let index = people.findIndex((p) => p.name.startsWith("J") && p.age > 30);

//   console.log(person);
//   console.log(index);
// }

// {
//   let words = ["JavaScript", "is", "fun"];

//   let sentence = words.join(" ");

//   console.log(sentence);
// }

// let a = [1, 2, 5, 3, 9, 7, 8];
// let b = a.sort((a, b) => b - a);
// console.log(b);
const protoPerson = {
  greet: function () {
    return "Hello, " + this.name;
  },
};
const person = Object.create(protoPerson);
person.name = "Dev";
person.i = "I";
console.log(person.i);

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   start: function () {
//     return this.make + " " + this.model + " is starting.";
//   },
// };

// car.model = "Something";

// console.log(car.start());

let a = {
  key: {
    key: "value",
  },
};

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.greet = function () {
//     return "Hello, " + this.firstName;
//   };
// }

// const person1 = new Person("John", "Doe", 30);
// console.log(person1.greet());

let obj = {
  name: "Someone",
  age: 18,
};
let keys = ["name", "age"];

for (let i = 0; i < keys.length; i++) {
  const element = obj[keys[i]];
  console.log(element);
}
