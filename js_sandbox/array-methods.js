// Create some arrays
const numbers = [43, 56, 33, 23, 86, 23];
const numbers2 = new Array(23, 27, 76);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Intert into array
numbers[2] = 100
// Find index of value
val = numbers.indexOf(23);

// MUTATING ARRAYS
// // Add on to end 
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off front end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse 
// numbers.reverse();

// concatinate arrays
val = numbers.concat(numbers2);

// Sorting array
val = fruits.sort();
val = numbers.sort();

// Use the "compare function"
val = numbers.sort(function(x, y) {
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);

