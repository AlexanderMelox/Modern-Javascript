const id = 100;

// // EQUAL TO

// if (id == 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// // NOT EQUAL TO

// if (id != 101) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// } 

// // EQUAL TO VALUE & TYPE

// if (id === 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// // EQUAL TO VALUE & TYPE

// if (id !== 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// Test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No id');
// }

// GREATE OR LESS THAN
// if (id >= 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// IF ELSE
const color = 'yellow';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 25;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log( id === 100 ? 'Correct' : 'Incorrect' );

// WITHOUT BRACES
if (id === 100)
  console.log('Correct');
else 
  console.log('Incorrect');
