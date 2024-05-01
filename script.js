let a = 5;
let b = 2;
let c = a % b;
// alert(c); the remainder operator is taking a(5) dividing it by b(2) and the alert will display the leftover number in this case 1.

a = 8;
b = 3;
c = a % b; 
// alert(c); once again using the remainder op. it will take a(8) divide it by b(3) and display the remainder of 2 in an alert.

a = 8;
b = 4;
c = a % b;
// alert(c); using remainder op. it will take a(8) divide it by b(4) and display the remainder (0) in an alert window.

/* The remainder operator is useful as it can display the remainder between two ints.
    */

a = 2;
b = 2;
c = 2 ** 2;
// alert(c); the exponentiation operator works by taking a(2) and arises it to the power of b(2) which then paces displays via an alert the answer in this case 4.

a = 2;
b = 3;
c = a ** b;
// alert(c); a(2) is raised to the power of b(3) which then displays the answer 8 via an alert.

a = 2;
b = 4;
c = a ** b;
// alert(c); a (2) raised to the power of b (4) = 16 displayed via alert

/* the exponentiation operator is useful to do the power of math which to be quite 
    honest i only figured out how to do because of the odin project. */


a = 4;
b = (1/2);
c = a ** b;
// alert(c); apparently the power of 1/2 is the same as the square root of. i will have to take them at there word because i have no idea.

a = 8;
b = (1/3);
a = a ** b;
// alert(c); aparently the power of 1/3 is the same as a cubic route. will habe to take them at the word as i have no idea.


a = "my";
b = "string";
c = a + b;
// alert(c); this is an example of string concatenates it simply adds the a to the b and displays the result.

a = 1;
b = "two";
c = a + b;
// alert(c); this is another example of concatenation. note that if one of the oporands is a string both will become strings.

// alert(1 + 2 + "three"); this is a more complex example but the idea is the same js will first do the math 1 + 2 = 3. so the alert will be 3three.

// alert("three + 3 + 3"); in this case however the string comes before the math so everything after the string will become a string.


/*The addiction is the only operator that works with string concatenation, other operators 
    will convert the strings to numbers. */


a = 1;
// alert( +a ); this will display 1 as the unary operator has no effect on numbers.


a = -6;
// alert( +a ); once again this will have zero effect as a = number and unary operators have no effect on numbers.


a = true;
// alert( +a ); this will display 1 as its not a number it will convert it into a number.

a = "";
// alert( +a ); this displays 0 or false as its not a number it will convert it into one.

/* this is useful when i want to convert strings to numbers as in example in a form. 
    prohalps when you want to add something together i will include a final example below to 
        get in one last bit of practice.
        */

let apples = "3";
let oranges = "4";
// alert(+apples + +oranges); this is actually really handy. im going to feed my pets a treat.


a = b = c = 4 + 4;
/*alert(a);
alert(b);
alert(c); this is an example of daisy chaINING assignments. however its far better practice 
            to split them into chunks. */

// FINAL TASK ALSO A BIT OF FUN. //

let x = prompt("First number: ");
let y = prompt("second number: ");
alert("your answer is " + (+x + +y));


//OMFG I JUST MADE A FUCKING CALCULATOR..... now i know i can do anything.//
