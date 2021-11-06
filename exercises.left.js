// M1-DAY3 //


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 6
let numberValue  
    if (x === 1) {
        console.log("One");
    } if (x === 2) {
        console.log("two");
    } else if (x === 3) {
        console.log("three");
    } else if (x === 4) {
        console.log("four");
    } else if (x === 5) {
        console.log("five");
    } else if (x === 6) {
        console.log("six");
    } else if (x === 7) {
        console.log("seven");
    } else if (x === 8) {
        console.log("eight");
    } else if (x === 9) {
        console.log("nine");
    } else {
console.log('Not a number!');
    }

    // M1-DAY3 - EXTRAS //

    /* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/


let isMale = false

let gender = isMale ? "male" : "female";

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let a = 6;
let b = 7;

if(a === 8 || b === 8 || a+b === 8 || b-a === 8) {
    console.log("yes it is!")
} else {
    console.log("Not true")
};


/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

let concatenation = "Hello" + "world"

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let i = 2
let j = 4
let k = 6

if (i > j && i > k) {
    if (j > k) {
        console.log(i + " " + j + " " + k)
    } else {
        console.log(i + " " + k + " " + j)
    }
} if (j > i && j > k) {
    if(i > k) {
        console.log(j + " " + i + " " + k)
    } else {
        console.log(j + " " + k + " " + i)
    }
} if (k > i && k > j) {
    if(i > j) {
        console.log(k + " " + i + " " + j)
    } else {
        console.log(k + " " + j + " " + i)
    }
};


/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = "this is the first string";
let astring2 = "this is the second string";
if (string1.lenght > str2.lenght) {
    console.log("str1 is the longest one")
} else
console.log("str2 is the longest one");

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let num = 400;
let percentuageNumb = 20;
let percentageFinal = (num / 100) * 20;

console.log(percentuageFinal);


// M1-DAY4 // 

