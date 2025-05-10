//the var keyword should only be used in code written for old browers
let a=6
let b=2
console.log(a+b)

let a1="51"
let b1=5
console.log(a1+b1)//Since a1 is a string ("51"), JavaScript treats b1 as a string as well and combines them rather than performing numeric addition.
/*Reason
Here's why JavaScript treats b1 as a string when adding it to a1:
- Type Coercion Mechanism: JavaScript follows a dynamic type conversion called type coercion. When an operation involves both a string and a number, JavaScript automatically converts the number into a string rather than converting the string into a number.
- String Has Higher Priority in Concatenation: Since one operand (a1) is already a string, JavaScript assumes that you want to continue using string behavior, rather than performing arithmetic. It converts the number (b1) into a string and merges them.
*/

let a2="5"
let a3=6
a3=b1// we can change and modify the value
console.log(Number(a2)+a3)//changeing string into number
console.log(a2+a3)
const a4=5
const a5=7
//a5=a3 we cannot change or modify the value
console.log(a4+a5)