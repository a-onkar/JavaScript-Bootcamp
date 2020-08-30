

// If-Else & Switch 

// If you have to passs a condition, based on whihc your statement would be executed.

console.log('************* If-Else  ***************');

let time = 12;
if (time >= 6 && time < 12)
    console.log('Good Morning');
else if (time >= 12 && time <= 18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');



let a = 600, b = 550, c = 500;

if (a > b && a > c)
    console.log('a is greatest');
else if (b > c)
    console.log('b is greatest');
else
    console.log('c is greatest')



/*************** Switch  *********************/

/*
The "switch" statement: In switch statement you dont have to pass any condition.
Syntax:

switch(x) {
 case 'value1':  // if (x === 'value1')
   ...
   [break]

 case 'value2':  // if (x === 'value2')
   ...
   [break]

default:
   ...
   [break]
}

*/

console.log('************* Switch  ***************');

let user = 'Beginner';

switch (user) {      //In switch you mention a variable instead of boolean condition

    case 'Beginner':            // This is always a strict condiction ( user === Beginner), user = Beginner will pass, user=Begin will fail
        console.log('Beginner user');
        break;

    case 'Intermediate':
        console.log('Intermediate user');
        break;

    case 'Advance':
        console.log('Advance user')
        break;

    default:
        console.log('Chutiya')
}


// Abover ex with if-else

let usr = 'Beginner';

if (usr === 'Beginner')
    console.log('Beginner user');
else if (usr === 'Advance')
    console.log('Advance user')
else if (usr === 'Expert')
    console.log('Expert user')
else
    console.log('Chutiya')
