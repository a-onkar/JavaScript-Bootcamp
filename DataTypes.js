
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


/* *******************************************************************************************************************************
     Objects, Array, Function: Here we will just see the basic syntax. In depth description will be added in different JS file.
****************************************************************************************************************************** */

//Objects

console.log("Example of Object declaration and accesing variables of an object")

let udobj = {} // Undefined object

let user = {
    name: "Anand",
    age:30
};

console.log(user);
console.log('User name before updating: '+user.name);

user.age = 36;   // Updating variable value using dot
user['name'] = "Supriya";    // Updating variable value using bracket notations

console.log('User name after updating: '+user.name);



//Arrays: List of objects
console.log("Example of Array declaration and accesing variables of an object");

let emptyArray = []; // Blank Array or Empty array

let sampleArray = ['el0', 'el1', 'el2', 'el3'];

console.log(sampleArray); // Priniting the complete Array
console.log(sampleArray[3]); // Printing specific element in an array

console.log('Length of Array: '+sampleArray.length); // Printing the length of array

sampleArray[4] = 'el4';  // Adding new element to Array

console.log(sampleArray); // Priniting the updated Array
console.log('Length of updated Array: '+sampleArray.length); // Printing the length of array


// Functions

function printData(){
    console.log("This is a basic function, that is printing this statement")
};

printData();


function greet (name, age){
    console.log("Hello " + name + ', your age is '+age)
};

greet('Anand', '33'); // Calling the function with all variables
greet('Supriya'); // Calling funcion with only one variable 
greet();


// Returning from a function 

function addNumber(num1, num2){
    return num1+num2;
}

let sum = addNumber(40,50);
console.log(sum)
console.log(addNumber(10,20))


function sqrRoot(num){
    let z = num * num;
    return z;
}

console.log(sqrRoot(5))
console.log(sqrRoot(25))



 