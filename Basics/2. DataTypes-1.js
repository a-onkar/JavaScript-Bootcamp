
/************** Variables & Operators**************/

/* DataTypes:

1. Primitive Data Types: String, Number, Boolean, Undefined, Null.
2. Reference Types: Object, Array, Function.

 */


/* Primitive Data Types: String, Number, Boolean, Undefined, Null.

var, let and const
- Earlier 'var' was used to declare variables, now 'let' is used 
- const for fixed value. Variable value does not change

Rules for creating JS variables: 
Cannot start with numbers 
Can star with letters, alphabets, _ or $
*/

let h = 'Hello JS-world';
let num = 10;
let floatNum = 12.1347;
let flag = true;
let isActive = false;
let price;
let nullValue = null;
let ud = undefined;

// Note: To check the data type, goto chrome console & enter: typeof 'variable_name'  OR use below way
console.log('Value of variable: '+ num)
console.log('Date type is ' + (typeof num))


// Dynamic
let d = 'Anand';
d = 08;  // Here the typeof will show as number, b'coz the value is updated. 


// If we use const its value cannot be changed
const firstName = 'Anandteerth';
const lastName = 'Onkar'
const emp_id = 8;
// console.log('Employee name: ' + firstName + ' ' + lastName);

let $name = `Anand "is" 'good'`;
console.log($name)



 