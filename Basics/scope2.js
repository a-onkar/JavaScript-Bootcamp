// Global scope variables - name
// Local scope variables - 

//  In a scope you can access variables defined in that scope or in any parent/ancestor scope.

let firstName = 'Anand'

if(true){
let firstName = 'Anandteerth'
let lastName = 'Onkar'
    if(true){
        console.log('Printing value of firstName: '+firstName)
        console.log('Printing value of lastName: '+lastName)
    }
    console.log('Printing value of firstName: '+firstName)
    console.log('Printing value of lastName: '+lastName)
}

console.log('Printing value of firstName: '+firstName)
// console.log('Printing value of lastName: '+lastName)

if(true){
    console.log('Printing value of firstName: '+firstName)
}


// printing without declaring a variable

if(true){
    name = 'Supriya'
    console.log(name)
} 