
/* Topics:

Define object.
Accessing  properties (variables) defined in object.
Adding new properties (variable) to existing object.
Removing properties (variable) from existing object.
Printing all property name & values from Object using 'for...in' loop.
*/

const user = {
  firstname: "Anand",
  lastname: "Onkar",
  email: "test@gmail.com",
  mobile: 99999999,
  age:21,
}


// Different ways to access Object properties

console.log(user["email"])

console.log(user.mobile)



//Add new property to existing object

user.age = 31;
user["status"] = "Employed";
user["Level"] = "Beginner";

console.log(user)

console.log(user.age)
console.log(user.status)


//Updating existing property of object

user["firstname"] = "Andy"

console.log(user.firstname)


//Remove property from Object

delete user.status;
delete user["age"];

console.log(user)
console.log(user.age)


// To print all the properties from Object, use : for...in loop

for(let x in user){
  // console.log(x)  // Prints only property name
  // console.log(user[x]) // Prints only property value
  console.log(x + ": "+user[x]) // Prints both property name & value
}

