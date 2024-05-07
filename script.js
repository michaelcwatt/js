// strings //

const string = "The revolution will not be televised.";
 // alert(string); this will display the contents of string variable in an alert. 

 /* strings must be inside qoutes of somekind in order for them to work double single or backticks. the exception
 to the rule is if your naming another variable as displayed below.*/

 const badString = string;
 // alert(badString); this will display the original variable string because badstring is = string.

 const single = 'single qoutes';
 const double = "double qoutes";
 const backtick = `Backticks`;
 //alert(single);
 //alert(double);
 //alert(backtick); these will display the results of the corresponding variables.

 /* double qoutes and single qoutes work in the same way and which one you choose comes down to personal preference
        however it is good practice to pick one and stick to it. backticks however are special!known as template literal
                this type of string can be used to embed info. inside these template literals you can include variables
                        or add expressions inside. examples will be included below.
                                */

const name = "chris";
const greeting = `hello, ${name}`;
// alert(greeting); this displays hello chris it does this by using them embeded variable name and adding it to the hello expression.

const one = "these";
const two = "nutz";
const joined = `${one} ${two}`;
// alert(joined); //this will display these nutz lol. it does so by adding variable one and two together. this is known and string concatenation. 

const song = "afterlife";
const score = 9.5;
const highScore = 10;
const output = `I like the song ${song} i give it a score of ${(score/highScore) * 100}% `;
// alert(output); this is more complex but it uses an expression to create a score and then display it using string concatenation.

const newLine = `One day you will
                know what you have to do 
                and do it`;
//  alert(newLine); strings with backticks respect linebreaks and it will display them in this output i will include the equivelent below in normal double qoutes.

const newLine2 = "One day you will\nknow what you have to do\nand do it.";
// alert(newLine2); easer to read the other one is lol yoda. but i noticed this one printed out nicer. 

const bigMouth = 'I\'ve no idea what the fuck im doing half the time its fuck\'d i know that\'s not how to spell it';
// alert(bigMouth); this works as the \ ignores the qoutation and therefore it thinkss its text or something fuck know to be honest.

const myString = "123";
const myNum = Number(myString);
//alert(myNum);
// alert(typeof myNum); the number function takes the string inside of myString converts them to a number and stores it in the vaariable myNum then displays it in an output.

const myNum2 = 123;
const myString2 = string(myNum2);
// alert(myString2);
// alert(typeof myString2); this should work but for some reason does not lol.


