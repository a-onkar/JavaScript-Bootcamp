

/**************** Assignment Operator *******************/

   // Operator  Meaning	    Description
    // x = y	x = y	    Assigns the value of y to x.
    // x += y	x = x + y	Assigns the result of x plus y tox.
    // x -= y	x = x - y	Assigns the result of x minus y tox.
    // x *= y	x = x * y	Assigns the result of x times y tox.
    // x /= y	x = x / y	Assigns the result of x divided by y tox.
    // x %= y	x = x % y	Assigns the result of x modulo y tox.
    // x &=y	x = x & y	Assigns the result of x AND y tox.
    // X |=y	x =x | y	Assigns the result of x OR y tox.
    // x ^=y	x = x ^ y	Assigns the result of x XOR y tox.
    // x <<= y	x = x << y	Assigns the result of x shifted left by y tox.
    // x >>= y	x = x >> y	Assigns the result of x shifted right (sign preserved) by y tox.
    // x >>>= y	x = x >>> y	Assigns the result of x shifted right by y tox.




//     Operator	Description
// expr1 == expr2	Equal. Returns true if expr1 and expr2 are equal. Conversion occurs if the operands are of different types.
// expr1 != expr2	Not equal. Returns true if expr1 and expr2 are not equal. Type conversion occurs as necessary.
// expr1 === expr2	Strict equal. Returns true if expr1 and expr2 are of the same type, and are equal.
// expr1 !== expr2	Strict not equal. Returns true if expr1 and expr2 are of different types, or are of the same type but not equal.
// expr1 > expr2	Greater than. Returns true if expr1 is greater than expr2. Type conversion occurs as necessary.
// expr1 >= expr2	Greater than or equal to. Returns true if expr1 is greater than or equal to expr2. Type conversion occurs as necessary.
// expr1 < expr2	Less than. Returns true if expr1 is less than expr2. Type conversion occurs as necessary.
// expr1 <= expr2	Less than or equal to. Returns true if expr1 is less than or equal to expr2. Type conversion occurs as necessary.


console.log('********* Comparison Operator *************')

console.log('1'==1);
console.log('1'===1);
console.log(true==1);


/****************** Ternary Operators *****************
Similar to if condition, but this is jus in 1 line.

Typical if syntax:

if ( condition ) {
  value if true;
} else {
  value if false;
}

Ternary operator syntax:

condition ? 'value if true' : 'value if false';

*/

console.log('********* Ternary Operator *************')

let person = {
    name:'Anand',
    age:'17',
    license:null
}

person.license = person.age>=18 ? 'Elgible' : 'Not Eligible';

console.log(person.license)



function checkLicense(age){
    return (age >=18 ? 'Elgible' : 'Not Eligible');
}

console.log(checkLicense(18));



/********* Logical  Operator *************/

console.log('********* Logical  Operator *************')

// console.log(false || true);
// console.log(true||true);
// console.log(false||'Anand'|| 12);
// console.log(true|| false||'Anand')

// console.log(false && true);
// console.log(true&&true);
// console.log(false&&'Anand'&& 12);
// console.log(true&& false&&'Anand')


let userColor = null;
let defaultColor = 'Black';

let currentColor = userColor || defaultColor;
console.log(currentColor)
