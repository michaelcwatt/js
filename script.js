console.log("Hello, world!")

let message1 = "hello, world"; // This is a variable that can be updated. not much difference between this one and ver but there are some //
let message2 = message1;

const myBirthday = "02.08.93"; //This is a variable that never changes, if i try to change it it will throw an error//

const COLOR_BLUE = "#00F"; // There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.Such constants are named using capital letters and underscores.For instance, let’s make constants for colors in so-called “web” (hexadecimal) format: //
let color = COLOR_BLUE;

//task1 completed//

let name = "john";
let admin = name;

//task2//

let planetName = "earth";
let visitorName = "hansel";

//arithmatic oporator// 

let x = 5; // addition // 
let y = 10;
let z = x + y;


let a = 10; // subtraction //
let b = 3;
let c = a - b;


let d = 10; // multiplication // 
let e = 9; 
let f = d * e;

let g = 10; // division //
let h = 2;
let i = g / h;

a = 10; // remainder The modulus operator (%) returns the division remainder. //
b = 4; 
c = a % b;

a = 10; // incrementing The increment operator (++) increments numbers. //
a++;
b = a;

a = 10; // decrementing The decrement operator (--) decrements numbers. //
a--;
b = a;

a = 5; //  exponentiation The exponentiation operator (**) raises the first operand to the power of the second operand. //
b = a ** 4;

let oporatorPresedence = (100+200)*3; // oporator presedence Operator precedence describes the order in which operations are performed in an arithmetic expression. //


// numbers // 

a = 8;  // JavaScript has only one type of number. Numbers can be written with or without decimals. //
b = 1.359;

a = 123e5; // Extra large or extra small numbers can be written with scientific (exponent) notation: //
b = 123e-5;

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits. The maximum number of decimals is 17. //

a = 999999999999999;
b = 9999999999999999;

a = 0.1; // Floating point arithmetic is not always 100% accurate: //
b = 0.2;
c = a + b;

c = (0.2 * 10 + 0.1 * 10) / 10; // To solve the problem above, it helps to multiply and divide: //

// adding numbers and strings WARNING !! JavaScript uses the + operator for both addition and concatenation. Numbers are added. Strings are concatenated. //

a = 10;  // adding two numbers together will always result in a number //
b = 10; 
c = a + b;

a = "10"; // If you add two strings, the result will be a string concatenation: //
b = "10";
c = a + b;

a = 10; // If you add a string and a number, the result will be a string concatenation: // 
b = "10";
c = a + b;


a = 10; // a common mistake is to expect 30 but due to string concatenation the awnser will be "the awnser is 1020"
b = 20;
c = "the awnser is: " + a + b;


// numeric strings // 

a = "300"; // annoyingly this works and the awnser comes out at -200 i think this is just one of those querky js things. they all work apart from the + oporator that will try and do string cocantination. 
b = "100";
c = b - a; 

// NaN - Not a Number // 

a = 100 / "apple"; // NaN is a JavaScript reserved word indicating that a number is not a legal number. Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number): //
alert(a);

// You can use the global JavaScript function isNaN() to find out if a value is a not a number: //

a = 100 / "apple"; // You can use the global JavaScript function isNaN() to find out if a value is a not a number: //
isNaN(a);

// infinity // 

// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number. //



