// Global scope - Defined outside of all the code blocks.
// Local scope - Defined inside a code block

//  In a scope you can access variables defined in that scope or in any parent/ancestor scope.

let varOne = 1;

if(true){
    console.log('Printing value of varOne: '+varOne)

    let varTwo = 2;
    console.log('Printing value of varTwo: '+varTwo)
}

console.log('Printing value of varTwo: '+varTwo) // will throw an error



