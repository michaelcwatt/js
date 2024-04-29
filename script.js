const myInt = 1066;
const myFloat = 10.66;
const myNum1 = 1112;
const myFloat1 = 11.11
myInt;
myFloat;
myNum1;
myFloat1;

//alert(typeof myInt);//
//alert(typeof myFloat);//

/* Here i have declared a few const numbers. I have used both ints and floats but they are both stored as
    a number variable. i have also used the typeof operator to return back the type of variable stored inside 
        the const. */ 


const lotsOfDecimals = 10.6757483929847474849;
lotsOfDecimals;

const twoDecimalPlaces = lotsOfDecimals.toFixed(2);
twoDecimalPlaces;

//alert(lotsOfDecimals);//
//alert(twoDecimalPlaces);//

/* above i have created two more number variables the first containing a very long int number. the second however 
    uses the .toFixed(x) method to take the long int from the first const and round it down to two decimal places.
        i then used alerts to display the resulting information. 
*/

let myNumber = "74";

myNumber = Number(myNumber) + 3;

//alert(myNumber); //

/* above i used a variable called myNumber (mn for short) to store a variable "74" i then wanted to use this 
    as a equation to add 3, however first i had to convert the data in mn to a int instead of a string. 
        todo this i used the Number(x) constructor to first convert the data in mn to a int then added 3.
            */

let num1 = 4;
num1++;
//alert(num1); returns the value 5//

let num2 = 4;
num2--;
//alert(num2); returns the value 3//

num1 = 5;
++ num1;
//alert(num1) returns the value of 6;//

num2 = 5;
-- num2; 
//alert(num2); returns the value of 4//

/* above i have used the increment and decrement oporators to adjust two variables.
        */

let x = 5;
x += 5;
//alert(x); this shows an alert displaying 10. it does so by adding the vlaue on the right with the variable on the Left.//

x = 10;
x -= 5;
// alert(x); this displays 5. it takes the value on the right minus the variable stored on the right in this case 10.

x = 9;
x *= 8;
//alert(x); this displays 72 same as before it takes the value on the right and multiplys it byt the variable stored on the screenLeft.//

x = 9;
x /= 90;
//alert(x); displays 0.1 it does so by dividing the value on the right with the variable on the screenLeft. //

/* above we used assignment operators to create a shorter syntax to do basic math. it does this by taking the
    value on the right with the variable on the left.
        */

let a = 5;
let b = 5;
let c = a === b;
// alert(c); this comparison operator is the strict equality operator. it measures if a is equal to b in this case it will return true.

a = 5;
b = 5;
c = a !== b;
// alert(c); this comparison operator is the strict non equality operator. it measures if a is not equal to b, in this case it will return false.

a = 6;
b = 2;
c = a < b;
// alert(c); less than operator. this tests to see if a is less than b. in this case it will return false.

a = 6;
b = 2;
c = a > b;
// alert(c); more than operator. this tests to see if a is more than b. in this case it will return true.

a = 6;
b = 6;
c = a <= b;
// alert(c); the less than or equal two operator. This tests to see if a is less than or equal to b. in this case the result will be true.

a = 8;
b = 5;
c = a >= b;
// alert(c); this is the more than or equal to operator. This tests to see if a is more than or equal to b. in this case the result will be true.

/* all of the above are comparison operators i believe they compare two values and convert the result into a
    bullion value (true or false.) i can see this being useful in loops and checking statements. 
