//? Arithmetic operators

// Name	Shorthand operator	Meaning
// Assignment	x = f()	x = f()
// Addition assignment	x += f()	x = x + f()  ex:  //? c=c + b;  Or c += b;

// Subtraction assignment	x -= f()	x = x - f()
// Multiplication assignment	x *= f()	x = x * f()
// Division assignment	x /= f()	x = x / f()
// Remainder assignment	x %= f()	x = x % f()
// Exponentiation assignment	x **= f()	x = x ** f()   //?power
// Increment (++)	Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.	If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.
// Decrement (--)	Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.	If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.
// Unary negation (-)	Unary operator. Returns the negation of its operand.	If x is 3, then -x returns -3.
// Unary plus (+)	Unary operator. Attempts to convert the operand to a number, if it is not already.
// +"3" returns 3.

// +true returns 1.

// Exponentiation operator (**)	Calculates the base to the exponent power, that is, base^exponent	2 ** 3 returns 8.
// 10 ** -1 returns 0.1.

//comparison operator

// Operator	Description	Examples returning true
// Equal (==)	Returns true if the operands are equal.	3 == var1
// "3" == var1

// 3 == '3'
// Not equal (!=)	Returns true if the operands are not equal.	var1 != 4
// var2 != "3"
// Strict equal (===)	Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.	3 === var1
// Strict not equal (!==)	Returns true if the operands are of the same type but not equal, or are of different type.	var1 !== "3"
// 3 !== '3'
// Greater than (>)	Returns true if the left operand is greater than the right operand.	var2 > var1
// "12" > 2
// Greater than or equal (>=)	Returns true if the left operand is greater than or equal to the right operand.	var2 >= var1
// var1 >= 3
// Less than (<)	Returns true if the left operand is less than the right operand.	var1 < var2
// "2" < 12
// Less than or equal (<=)	Returns true if the left operand is less than or equal to the right operand.	var1 <= var2
// var2 <= 5

//? Logical operators

// 1. Or   =>  ||
// 2. And   =>  &&

//

// let a = 10;
// a++; // 10
// ++a; //  11
// console.log(a); //11

// a--; // 10
// --a;  // 9

// console.log(a); //9

//? Bit wise operator
// Bitwise AND	a & b	Returns a one in each bit position for which the corresponding bits of both operands are ones.
// Bitwise OR	a | b	Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
// Bitwise NOT	~ a	Inverts the bits of its operand.

//?String operators
// In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

// console.log("my " + "rishabh"); // console logs the string "my rishabh".
// The shorthand assignment operator += can also be used to concatenate strings.

// For example,

// JS
// Copy to Clipboard

// let mystring = "alpha";
// mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.

//? Conditional (ternary) operator
// The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:

// condition ? val1 : val2
// If condition is true, the operator has the value of val1. Otherwise it has the value of val2. You can use the conditional operator anywhere you would use a standard operator.

// For example,

// JS
// Copy to Clipboard

// let age = 20;

// if (age >= 20) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// console.log(age >= 18 ? 'adult' : 'minor');
