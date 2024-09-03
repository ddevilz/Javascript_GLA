### 1. **Introduction to Arrays**

- **What is an Array?**
  - A collection of elements stored in a single variable.
  - Elements can be of any data type (numbers, strings, objects, etc.).
- **Creating Arrays**
  - Literal syntax: `let arr = [1, 2, 3];`
  - Constructor: `let arr = new Array(1, 2, 3);`

### 2. **Basic Array Methods**

- **`push()`**: Add one or more elements to the end.
  - Example: `arr.push(4);`
- **`pop()`**: Remove the last element.
  - Example: `arr.pop();`
- **`unshift()`**: Add one or more elements to the beginning.
  - Example: `arr.unshift(0);`
- **`shift()`**: Remove the first element.
  - Example: `arr.shift();`
- **`concat()`**: Merge two or more arrays.
  - Example: `let newArr = arr.concat([4, 5]);`
- **`slice()`**: Return a shallow copy of a portion of an array.
  - Example: `let sliced = arr.slice(1, 3);`
- **`splice()`**: Add, remove, or replace elements in an array.
  - Example: `arr.splice(1, 2, 'a', 'b');`

### 3. **Advanced Array Methods**

- **`forEach()`**: Execute a function for each array element.
  - Example: `arr.forEach((item) => console.log(item));`
- **`map()`**: Create a new array with the results of calling a function on every element.
  - Example: `let mapped = arr.map(x => x * 2);`
- **`filter()`**: Create a new array with elements that pass a test.
  - Example: `let filtered = arr.filter(x => x > 2);`
- **`reduce()`**: Apply a function against an accumulator to reduce the array to a single value.
  - Example: `let sum = arr.reduce((total, value) => total + value, 0);`
- **`some()`**: Check if at least one element passes the test.
  - Example: `let hasLargeNumber = arr.some(x => x > 10);`
- **`every()`**: Check if all elements pass the test.
  - Example: `let allPositive = arr.every(x => x > 0);`
- **`find()`**: Return the first element that passes the test.
  - Example: `let found = arr.find(x => x > 2);`
- **`findIndex()`**: Return the index of the first element that passes the test.
  - Example: `let index = arr.findIndex(x => x > 2);`
- **`includes()`**: Check if an array includes a certain value.
  - Example: `let hasThree = arr.includes(3);`
- **`indexOf()`**: Return the first index at which a given element can be found.
  - Example: `let index = arr.indexOf(3);`
- **`join()`**: Join all elements into a string.
  - Example: `let str = arr.join('-');`
- **`reverse()`**: Reverse the order of the elements.
  - Example: `arr.reverse();`
- **`sort()`**: Sort the elements.
  - Example: `arr.sort((a, b) => a - b);`

### 4. **Tasks/Exercises**

- **Task 1: Array Manipulation**

  - Create an array of numbers `[1, 2, 3, 4, 5]`.
  - Add a number to the beginning and end.
  - Remove the second and last elements.
  - Reverse the array.
  - Display the final array.

- **Task 2: Filtering and Mapping**

  - Create an array of numbers from 1 to 10.
  - Filter out even numbers.
  - Map the remaining numbers to their squares.
  - Display the final array.

- **Task 3: Reducing an Array**

  - Given an array of numbers, find the sum of all elements using `reduce()`.
  - Try using `reduce()` to find the product of all elements as well.

- **Task 4: Find and Replace**

  - Given an array of names, find the first name that starts with "J" and replace it with "John".
  - Display the final array.

- **Task 5: Sorting and Searching**

  - Create an array of random numbers.
  - Sort the array in ascending order.
  - Use `find()` to locate the first number greater than 10.
  - Display the sorted array and the found number.

- **Task 6: Array Transformation**
  - Given an array of objects representing products (`{name, price}`), use `map()` to create an array of just the names.
  - Use `filter()` to create a new array of products that cost more than $20.
  - Display the results.
