// {
//   const obj = {
//     prop: 42,
//   };

//   Object.defineProperty(obj, "prop", {
//     value: 42,
//     writable: false,
//     configurable: false,
//   });

//   obj.prop = 100;
//   delete obj.prop;

//   console.log(obj.prop);
// }

// {
//   const obj = {
//     a: 1,
//     b: function () {
//       return this.a;
//     },
//   };

//   const b = obj.b;
//   console.log(b());
// }

// {
//   const obj1 = { a: 1 };
//   const obj2 = { b: 2 };
//   const obj3 = { c: 3 };

//   const newObj = Object.assign(obj1, obj2, obj3);
//   obj1.a = 10;

//   console.log(newObj.a);
// }

// {
//   const a = { name: "Alice" };
//   const b = a;

//   b.name = "Bob";
//   console.log(a.name);
// }

// {
//   const obj = {
//     a: 1,
//     b: 2,
//   };

//   const keys = Object.keys(obj);
//   keys.push("c");
//   console.log(keys);
//   console.log(obj);
// }

// {
//   const obj = {
//     a: 1,
//     getA() {
//       const inner = () => this.a;
//       return inner();
//     },
//   };

//   console.log(obj.getA());
// }

// {
//   const x = {};
//   const y = { key: "y" };
//   const z = { key: "z" };

//   x[y] = 100;
//   x[z] = 200;

//   console.log(x[y]);
// }

// {
//   const obj = {
//     a: 1,
//     b: {
//       c: 2,
//     },
//   };

//   const copy = Object.assign({}, obj);
//   copy.b.c = 3;

//   console.log(obj.b.c);
// }

// {
//   const obj = {
//     foo: "bar",
//     func: function () {
//       const self = this;
//       console.log(this.foo);
//       console.log(self.foo);
//       (function () {
//         console.log(this.foo);
//         console.log(self.foo);
//       })();
//     },
//   };

//   obj.func();
// }

// {
//   const obj = {
//     a: 10,
//     b: function () {
//       return this.a;
//     },
//   };

//   const newObj = {
//     a: 20,
//   };

//   console.log(obj.b.call(newObj));
// }



