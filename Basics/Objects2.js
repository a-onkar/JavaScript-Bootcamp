
/* Topics:

How to define object method (i.e defining methods with an Object).
Accessing the methods defined in object.
Method are functions that are created inside an object.
*/

//define object method

let employee = {
  name: "Brian",
  id: 111,
  job: "CEO",
  salary: 150000,

  // The below method is created as one of the property of an object
  bonus: function () {
    return (this.salary * (8 / 100)); // If you want to access any object property in a method use 'this' keyword
  }

};


// Accessing  properties (variables) defined in object.
// console.log(employee["name"]);

// Accessing the methods defined in object: syntax - objectname.methodname()

console.log(employee.bonus())


/********************************************************************************
 * ********* Optimizing above object, by defining method in optmized way
********************************************************************************* */

let employees = {
  title: "Optimized",
  sal: 40000,

  calBonus() {
    return (this.sal * 0.75)
  }
}

console.log(employees.calBonus())
