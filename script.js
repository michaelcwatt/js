let a = "this is a string.";
//alert(a);
//a = 12345;
// alert(a); a variable can be flexible one moment it can contain a string and the next it can contain a int. programming languages like this are called dynamically typed.

a = 123;
a = 1.23
// alert( 1/0 ); as well as ints and floats there are other numeric values. such as infinity. you can also address it directly an example would be alert(infinity)

a = "not a number";
// alert(a /2); nan is sticky any mathematical operation with nan will always = nan. strictly speaking this is not an operation but a computational error.

//a = alert(9007199254740991 + 1);
//a = alert(9007199254740991 + 2); everything after 253-1 will no longer be accurate as it will be larger than the 64bit storage that is allocated for it.

/* for anything larger than the higher end, that cannot be stored in the number variable we use the BigInt.
        the big int works by adding an 'n' to the end of the number. big ints are rarely used.
                */

let str = "hello"; //these are double quotes. double and single quotes are practically the same thing they store strings.//
let str2 = 'hello, single ticks'; // these are single quotes. //
let phr = `${str} this is embedded message.`; // these are backticks, backticks are different you can use them to embed variables and expressions by using the ${...} //
// alert(phr); //

// alert(`this would be an example of an expression ... ${1+1} is equal to two.`);

        /* in conclusion there is practically no difference between single quotes and double quotes they are both just
        used to store a string. backticks however can be used to embed a variable or expression. 
                */

let booleanCheck = true; // this is an example of a boolean 
 // alert(booleanCheck); // this takes the variable boolean check and displays it to me
let booleanCheck2 = false;
 // alert(booleanCheck2);

 let isGreater = 1 > 4;
 // alert(isGreater); boolean values can also come as a result of a comparison as is the example above.

        /* Boolean  operators can offer two options, true or false. they can have these manually stored in them
                or they can be the result of a comparison. */

let age = null;
// alert(age); // all this means is the value is nothing, empty or value unknown 

        /* null is a special operator that basically means the special variable box holds noting, its 
                basically a place holder. 
                        */ 

let cat;
// alert(cat); as the variable cat has been created but nothing has been put in the box it will get the value of undefined.

cat = 100;
cat = undefined;
// alert(cat); this is possible however usually null is used to store nothing and undefined is reserved for undefined.

                /* undefined seems to be more like a placeholder than an actual thing */

                /* the next type is called object or symbol. these are special because everything else is considered primative
                        dont know anything about it yet though.
                                */


let test = 1234;
//alert(typeof test);
test = "hello bitch";
//alert(typeof test);
test = 20n;
//alert(typeof test);

                /* the typeof operator is special and simple. it simply tells you what kind of thing is in the variable.
                        */

        

        /*   Summary
        There are 8 basic data types in JavaScript.

        Seven primitive data types:
                number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
                bigint for integer numbers of arbitrary length.
                string for strings. A string may have zero or more characters, there’s no separate single-character type.
                boolean for true/false.
                null for unknown values – a standalone type that has a single value null.
                undefined for unassigned values – a standalone type that has a single value undefined.
                symbol for unique identifiers.
                And one non-primitive data type:
                object for more complex data structures.
                The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.

*/

                
