// string methods 

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
// alert(length); this method (featured above) displays the length of the string in the variable text.

text = "Hayley";
let char = text.charAt(0);
// alert(char); this method as above, displays the charachter at position 0. in binary 0 would be H

text = "HELLO WORLD";
char = char.charCodeAt(0);
// alert(char); this will display 72 as it will display the UTF-16 code for whatever is at position 0 in this case H and the corosponding code would be 72

text = "I hate my life";
char = text.at(2);
// alert(char); another way to write this is shown below.
text = "i like coke"
char = text[2];
// alert(char); these are at() methods and are useful to take one character from a sentence.

// extracting string parts // 

// - slice (start to end)
// - substring (start to end)
// - substr (start to length)

text = "apple, banana, tooth";
let part = text.slice(3,14);
// alert(part); this will display le, banana, because it starts from position 3 and ends at 14 removing a slice of the cake at the size we want.
part = text.slice(3);
// alert(part); if you omit the second input then the slice will be the rest of the cake.
part = text.slice(-0);
// alert(part); if this parameter is set negative then it will be at the end of the string.

part = text.substring(3,20);
//alert(part); substring and slice are much and such the same the only difference being with substring anything below 0 will be treated as 0.

part = text.substr(3, 13);
// alert(part); substr is simaler to slice but The difference is that the second parameter specifies the length of the extracted part.


let lower = "this is my lower case text";
let upper = lower.toUpperCase();
// alert(upper); the touppercase method takes the value in the first variable and converts everything to upper case.

upper = "THIS WILL BECOME LOWER CASE, WAIT AND SEE."
lower = upper.toLowerCase();
//alert(lower); the tolowercase method takes whatever is inside the variable and converts everything to lower case.


let txt1 = "hello";
let txt2 = ", world!";
let txt3 = txt1.concat("", txt2);
//alert(txt3); this alert will concat txt1 and txt2 this is combined via .concat method in the variable txt3  and displayed in a alert.

txt1 = "           Hello, World!         ";
txt2 = txt1.trim();
//alert(txt2); the trim method removes whitespace inside variables. the alert will display the txt1 variable with witespace removed.

txt1 = "        Hello, world        ";
txt2 = txt1.trimStart();
// alert(txt2); the trim start method works the same as the trim method but only removes the white space from the start.

txt1 = "          hello, world!          ";
txt2 = txt1.trimEnd();
// alert(txt2); the trimend method works the same way as the previous two but only removes the whitespace from the end of the variable.

txt1 = "5";
txt2 = txt1.padStart(4,"0");
//alert(txt2); the pad start method creates padding before txt1 is displayed the nuumber means it will continue untill the number 4 is reached and it will use the digit 0 to pad it.

let numb = 5;
let convert = numb.toString();
txt1 = convert.padStart(10,"x");
// alert(txt1); this uses multiple methods first declairing a string, next converteing the string to a number variable, finally using the pad start method to pad the string before presenting the converted string number.

txt1 = "9";
txt2 = txt1.padEnd(25,"X");
// alert(txt2); pad end works the same as pad start bud adds the padding to the end.

numb = 10;
convert = numb.toString();
txt1 = convert.padEnd(10,"D");
//alert(txt1); numb is declared with 10, numb variable is converted to a string, string has padding added to the end bia padend function.


 

