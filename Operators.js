

/****************** Arithematic Operators ******************/

let a = 7, b = 3;

console.log(a+b);
console.log(a-b);
console.log(a%b);
console.log(a/b)
console.log(a**b) // a rasie to the power b


/****************** Post-increement & Pre-Increement ******************/

console.log('************Post-increement & Pre-Increement****************');

// Example 1:
console.log('*************Pre & Post increement example 1************');

let p=10;

// Post-increement
console.log('Original value of p before increement: '+p)
console.log('Value of p at post-increement (p++): '+ p++)  // Post-increement
console.log('Value of p after increement: '+p)

let q=10;
// Pre-increement
console.log('Original value of q before increement: '+q)
console.log('Value of q at pre-increement (++q): '+ ++q)  // Pre-increement
console.log('Value of q after increement: '+q)


// Example 2:
console.log('*************Pre & Post increement example 2************');
let x = 1;
let y = x ++; // First the value of x (i.e. 1) will be assigned to y & then the increement will take place.

console.log(x) //2
console.log(y) //1

let x1=1;
let y1 = ++x1;

console.log(x1); //2
console.log(y1); //2


// Example 3:
console.log('*************Pre & Post increement example 3************');
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

x = 10 * m++; // 10 * 10 = 100
console.log("Value of m after post-increement: "+m);
console.log("Multiplying the post-increement (10 * m++): "+x);
console.log("Value of m after post-increement: "+m);

n = 10;
y = 10 * ++n; // 10 * 11 = 110
console.log("Multiplying the pre-increement (10 * ++n): "+y);
console.log("Value of n after pre-increement: "+n);




