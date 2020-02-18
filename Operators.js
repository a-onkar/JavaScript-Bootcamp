

/****************** Arithematic Operators ******************/

let a = 7, b = 21;
let c; 

c= a + b;
console.log('Addition: '+c);

c = a % b;
console.log('Modulus operation result: '+c);

c = b / a;
console.log('Division: '+c)

a=5, b=2;
c=a**b;  // a rasie to the power b
console.log('Raise to the power: '+c)


/****************** Post-increement & Pre-Increement ******************/

console.log('Post-increement & Pre-Increement');

let i=10;

console.log('Original value of i: '+i)

i++; // Post-increement
console.log('Post-increement (i++): '+ i);

let j=10;
console.log('Original value of j: '+j)
++j;
console.log("Pre-increement (++j): "+ j);

// The value will be same, you wont find any difference. The diff will be noticed while performing some mathematical operations.

let m=10;

let x = 10 * m++; // 10 * 10 = 100

console.log("Multiplying the post-increement (10 * m++): "+x);
console.log("Value of m after post-increement: "+m);

n = 10;
let y = 10 * ++n; // 10 * 11 = 110
console.log("Multiplying the pre-increement (10 * ++n): "+y);
console.log("Value of n after pre-increement: "+n);



m=15, n= 15;

x = 10* m--; // 10 * 15
y = 10 * --n; // 10 * 14

console.log("Multiplying the post-decreement (10 * m--): "+x);
console.log("Value of m after post-decreement: "+m);

console.log("Multiplying the pre-decreement (10 * --n): "+y);
console.log("Value of n after pre-decreement: "+n);



