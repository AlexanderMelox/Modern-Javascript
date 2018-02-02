const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Alex';
const tags = 'web design,web development'

let val; 

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Appending
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indeOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = tags.split(',');

// replace()

val = str.replace('Alex', 'Jack');

// includes()
val = str.includes('foo');



console.log(val);
