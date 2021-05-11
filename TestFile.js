// console.log('This file is used to test code / coding practice only')

/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
basic - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is an Admin user with all access`;
      break;

    case "subadmin":
      return `${name} is an subadmin user with acccess to create/delete courses`;
      break;

    case "testprep":
      return `${name} is an testprep user with acccess to create/delete tests`;
      break;

    case "basic":
      return `${name} is a basic user with acccess to consume content`;
      break;

    default:
      return `You are not a trial user Dear ${name}`;
      break;
  }
}

console.log(getUserRole("Anand", "admin"));


// Another way

var getUserRole1 = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is an Admin user with all access`;
      break;

    case "subadmin":
      return `${name} is an subadmin user with acccess to create/delete courses`;
      break;

    case "testprep":
      return `${name} is an testprep user with acccess to create/delete tests`;
      break;

    case "basic":
      return `${name} is a basic user with acccess to consume content`;
      break;

    default:
      return `You are not a trial user Dear ${name}`;
      break;
  }
}

console.log(getUserRole1("Anand", "admin"));