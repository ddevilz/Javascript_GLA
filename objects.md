#### **1. Introduction to Objects**

- **What is an Object?**

  - In JavaScript, an object is a complex data structure that allows you to store collections of data and more complex entities. It's a way to group related data and functions together.
  - Objects are created using key-value pairs, where the key is a string (or Symbol) and the value can be any data type, including another object, array, or function.

- **Creating Objects**

  - **Object Literal Notation:**
    ```javascript
    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      greet: function () {
        return "Hello, " + this.firstName;
      },
    };
    ```
  - **Constructor Function:**

    ```javascript
    function Person(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.greet = function () {
        return "Hello, " + this.firstName;
      };
    }

    const person1 = new Person("John", "Doe", 30);
    ```

  - **Using `Object.create()`:**

    ```javascript
    const protoPerson = {
      greet: function () {
        return "Hello, " + this.firstName;
      },
    };

    const person2 = Object.create(protoPerson);
    person2.firstName = "Jane";
    person2.lastName = "Smith";
    ```

#### **2. Accessing and Modifying Object Properties**

- **Dot Notation:**
  ```javascript
  console.log(person.firstName); // John
  person.age = 31;
  ```
- **Bracket Notation:**
  ```javascript
  console.log(person["lastName"]); // Doe
  person["age"] = 32;
  ```
- **Dynamic Property Names:**
  ```javascript
  const propName = "firstName";
  console.log(person[propName]); // John
  ```

#### **3. Methods in Objects**

- Methods are functions that are stored as object properties.

  ```javascript
  const car = {
    make: "Toyota",
    model: "Camry",
    start: function () {
      return this.make + " " + this.model + " is starting.";
    },
  };

  console.log(car.start()); // Toyota Camry is starting.
  ```

#### **4. `this` Keyword**

- `this` refers to the object in which the method is defined.

  ```javascript
  const user = {
    name: "Alice",
    logName: function () {
      console.log(this.name);
    },
  };

  user.logName(); // Alice
  ```

#### **5. Prototypes and Inheritance**

- **Prototype Chain:**

  - Every JavaScript object has a prototype. When trying to access a property that doesn't exist on the object, JavaScript looks at the object's prototype, and so on up the chain.

  ```javascript
  const animal = {
    type: "Mammal",
  };

  const dog = Object.create(animal);
  dog.breed = "Golden Retriever";

  console.log(dog.type); // Mammal (inherited from animal)
  ```

- **Prototype Methods:**

  - Adding methods to the prototype ensures that all instances of an object share the same method, saving memory.

  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.greet = function () {
    return "Hello, " + this.name;
  };

  const person1 = new Person("John", 30);
  const person2 = new Person("Jane", 25);
  console.log(person1.greet()); // Hello, John
  console.log(person2.greet()); // Hello, Jane
  ```

#### **6. Object Methods:**

- **Object.keys()**: Returns an array of a given object's own enumerable property names.
  ```javascript
  console.log(Object.keys(person)); // ["firstName", "lastName", "age", "greet"]
  ```
- **Object.values()**: Returns an array of a given object's own enumerable property values.
  ```javascript
  console.log(Object.values(person)); // ["John", "Doe", 31, ƒ]
  ```
- **Object.entries()**: Returns an array of a given object's own enumerable property [key, value] pairs.
  ```javascript
  console.log(Object.entries(person)); // [["firstName", "John"], ["lastName", "Doe"], ["age", 31], ["greet", ƒ]]
  ```

#### **7. Shallow vs. Deep Copying**

- **Shallow Copy:** Only copies the object’s top-level properties, not nested objects.
  ```javascript
  const copy = Object.assign({}, person);
  ```
- **Deep Copy:** Copies all nested objects.
  ```javascript
  const deepCopy = JSON.parse(JSON.stringify(person));
  ```

#### **8. Advanced Object Concepts**

- **Destructuring:**
  ```javascript
  const { firstName, age } = person;
  console.log(firstName); // John
  console.log(age); // 31
  ```
- **Computed Property Names:**
  ```javascript
  const propName = "age";
  const dynamicPerson = {
    [propName]: 30,
  };
  console.log(dynamicPerson.age); // 30
  ```
- **Object Freezing and Sealing:**
  - **`Object.freeze()`**: Makes an object immutable.
  - **`Object.seal()`**: Prevents new properties from being added but allows modification of existing properties.

---

### **Tricky Questions on JavaScript Objects**

1. **What is the output of the following code? Why?**

   ```javascript
   const obj = {
     a: 1,
     b: function () {
       return this.a;
     },
   };

   const b = obj.b;
   console.log(b());
   ```

   **Answer:** `undefined`. When the method `b` is called without the context of `obj`, `this` inside the method refers to the global object (or `undefined` in strict mode).

2. **How can you prevent modification of an object?**

   - **Answer:** By using `Object.freeze(obj)`, which makes the object immutable. Any attempts to change, add, or delete properties will fail.

3. **What is the difference between `Object.create(null)` and `{}`?**

   - **Answer:** `Object.create(null)` creates an object with no prototype, meaning it doesn't inherit from `Object.prototype`. `{}` creates an object with a prototype chain.

4. **How does JavaScript handle object property names when a string and a number are used as keys?**

   ```javascript
   const obj = {};
   obj["1"] = "one";
   obj[1] = "another one";
   console.log(obj["1"]);
   ```

   **Answer:** `'another one'`. JavaScript converts numbers used as object keys to strings, so both `'1'` and `1` refer to the same property.

5. **What will be the output of the following code?**

   ```javascript
   const a = {};
   const b = { key: "b" };
   const c = { key: "c" };

   a[b] = 123;
   a[c] = 456;

   console.log(a[b]);
   ```

   **Answer:** `456`. When objects are used as keys, JavaScript converts them to strings, resulting in both `b` and `c` being treated as `[object Object]`.

6. **What is the difference between using a method in the object's prototype vs. adding the method directly in the constructor function?**

   - **Answer:** Methods added to the prototype are shared across all instances of the object, reducing memory usage. Methods added directly in the constructor function are unique to each instance, increasing memory usage.

7. **Consider the following code. What will be the output and why?**

   ```javascript
   const foo = {
     bar: {
       baz: 42,
     },
   };

   const { bar } = foo;
   bar.baz = 100;

   console.log(foo.bar.baz);
   ```

   **Answer:** `100`. The `bar` variable is a reference to the `bar` object inside `foo`, so modifying `bar.baz` also modifies `foo.bar.baz`.

---
