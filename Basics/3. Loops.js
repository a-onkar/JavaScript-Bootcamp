/*
for 
for...if
for..in
for...of
while
do-while
infinite loop
*/

console.log('*************** for loop *******************')

// for(let i=3; i>=0; i--)
// alert('Count: '+i);


// for (let i = 1; i <= 3; i++) {
//        for (j = 1; j < 5; j++) {
//         console.log("Outer loop value: " + i + " Inner loop value: " + j)
//     }

// }



for (let j = 1; j <= 10; j++) {
    console.log(j);
if (j % 2 === 0)
    console.log(j + ' is even number')
}



console.log('*************** while loop *******************')

// let i = 3;

// while(i>=0){
    // alert('Count down begins: '+i);
//     i--;
// }

let i = 0;

while(i<10){
    console.log('Print '+i);
    i++;
}


console.log('************** For-in ***************')

const person = {
    name: 'Anand',
    age: '32',
    profession: 'Software Engineer',
    location: 'Limerick'
}

for(let key in person){
    console.log(`The ${key} of object is ${person[key]}`)
}


const color = ['Red', 'Orange', 'White', 'Blue']

// for(let index in color){
//     console.log(index, color[index])
// }


/* Above example using for-of loop */

console.log('********** For...of *************')

for(let col_indx of color)
console.log(col_indx)