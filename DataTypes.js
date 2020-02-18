
console.log('The below data is coming from DataTypes.js');

/************** Variables & Operators**************/
/* Earlier 'var' was used to declare variables, now 'let' is used */

/* DataTypes:

1. Primitive Data Types: String, Number, Boolean, Undefined, Null.
2. Reference Types: Object, Array, Function.

*/


// Primitive Data Types: String, Number, Boolean, Undefined, Null.

let h = 'Hello JS-world';
let num = 10;
let floatNum = 12.1347;
let flag = true;
let isActive = false;
let price;
let nullValue = null;
let ud = undefined;

// Note: To check the data type, goto chrome console & enter: typeof 'variable_name'

// Dynamic
let d = 'Anand';
d = 08;  // Here the typeof will show as number, b'coz the value is updated. 


// If we use const its value cannot be changed
const firstName = 'Anandteerth';
const lastName = 'Onkar'
const emp_id = 8;
// console.log('Employee name: ' + firstName + ' ' + lastName);


/*********************************************************************************************************************************/
//                                           Objects, Array, Function
/*********************************************************************************************************************************/
//Objects

let udobj = {} // Undefined object

let user = {
    name: "Anand",
    age:33
};

console.log(user);
console.log(user.name);
user.age = 35;

console.log(user.age);





