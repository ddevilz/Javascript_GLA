// let obj = {
//   a: "value",
// };

// console.log(obj.a);
// console.log(obj["a"]);

// for (let i = 0; i < 10; i++) {
//   //block of code
// }
// let i = 0
// while (i < 10) {
//     // block of code
// }

// do {
//     // block of code
// } while(i < 10)

// console.log(a);
// var a = 3;
// let b = [1, 3, 2, 4];
// b.sort();

// let a = "Hello world!";
// let b = a.replace("world", "new");
// console.log(b);
// console.log(a);

// let c = a.slice(3,7);
// console.log(c);
const fn = () => {};
// let arr2 = [6, 7, 8];
// let arr3 = arr.slice(1,3)
// console.log(arr3);

// let arr = [1, 3, 4, 5];
// console.log(arr.sort((a, b) => b - a));

// let a = arr.forEach((a) => a * 4);
// let b = arr.map((a) => a * 4);
// console.log(a);
// console.log(b);
// let c = arr.filter((a) => a > 2).map((a) => a * 3);
// console.log(c);

// let d = arr.reduce((prev, curr) => prev + curr, 2);

// console.log(d);

let a = {
  key: "value",
  name: "Dev",
};
a.num = 30;

const protoPerson = {
  greet: function () {
    return "Hello, " + this.firstName;
  },
};

const person2 = Object.create(protoPerson);
person2.firstName = "Jane";
person2.lastName = "Smith";
console.log(person2);

const original = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: 10001,
  },
};

const shallowCopy1 = Object.assign({}, original);

const shallowCopy2 = { ...original };

shallowCopy1.address.city = "Los Angeles";

console.log(original.address.city);
console.log(shallowCopy1.address.city);

{
  const original = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      zip: 10001,
    },
  };

  const deepCopy = JSON.parse(JSON.stringify(original));

  deepCopy.address.city = "Los Angeles";

  console.log(original.address.city);
  console.log(deepCopy.address.city);
}
