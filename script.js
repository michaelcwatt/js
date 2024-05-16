// comparison //

/* We know many comparison operators from maths.

In JavaScript they are written like this:

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

All comparison operators return a boolean value:

true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “not the truth”.

*/ 

//alert(2 > 1); this of course will return back true as 2 is bigger than 1.
//alert(2 == 1); this will return back false as 2 is not equal to 1.
//alert(2 != 1); this will return back truse because 2 and 1 are obviously not the same.

let result = 5 > 1;
// alert(`${result} because 5 is obviously greater than 1 ... duh`); the result of is 5 greater than one is stored in a variable called result and then displayed using the alert thing.


result = 'Z' > 'A';
//alert(result); the comparison is done by taking the ascci for Z which is 90 and comaares it against A ascii for which is 65. 90 is higher than 65 so this will return true.
result = 'Glow' > 'Glee';
//(result); this will return back true as by the tuume it reaches the third charachter e is greater than o therefore the first string is greater and they are not the same.
result = 'Bee' > 'Be';
//alert(result); this will also retuen back true as there is a third charachter which is greater than the other one therefore they are not the same end here.

/* the algoritham to compare two strings is as follows...

    The algorithm to compare two strings is simple:

    -  Compare the first character of both strings.
    -  If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
    -  Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
    -  Repeat until the end of either string.
    -  If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
        */

                    //comparisons of different types//


    result = '4' > 1;
    // alert(result); this will return back true as the first is converted from a string to a number then calculated. of course 4 is greater than 1 so this will return true.
    result = '01' == 1; 
    //alert(result); this will return back true as the first convertes from string to number 1 then the equation is done 1 is equal to 1 therefore true is returned.
            //for boolean values 1 is equal to true. and 0 is equal to false.
    //alert(true == 1);
    //alert(false == 0);

                //strict equality operator//

    //alert(0 == false);
    //alert('' == false);
            /* the above is a problem because it cannot tell the difference between 0 and false. as you can see 
                    an empty string is read as a 0 making it display false this is done because of type conversion.
                        the string is converted to a number ... nothing = 0, 0 is read as false. this can casue problems
                            the way around this is by using the strict equality oporator === this does a comparison
                                without a conversion.
                                    */
                                   
    //alert(0 === false); this returns back false unlike the previous because no type conversion has taken place 0 is not the same as false so it will return back false.
    //alert(1 !== 2); this is the strict non equality operator. works the same as the previous no type conversion takes place but it simply is not rather than is.
                //the equality oporator is a bit longer to write but better as there is less room for error.

    
                            //Comparison with null and undefined//

    //alert(null === undefined); using the stict equality checker this will return back false of course because null and undefined are two different types.
    //alert(null == undefined); There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.
                /*For maths and other comparisons < > <= >=
                    null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
                        Now let’s see some funny things that happen when we apply these rules. And, what’s 
                            more important, how to not fall into a trap with them.
                                */

    //alert(null > 0); this returns back false as greater than is mathematical so null is converted to 0. 0 is not greater than 0 therefore it will return back false.
    //alert(null == 0); this also returns back false as == is not mathematical the only thing null is equal equal to is undefined, there in love lol.
    //alert(null >= 0); this returns back true it does so because its being compared mathematically therefore null is 0 and 0 is not greater than but it is equal to 0.


                        //An incomparable undefined//

    //alert(undefined > 0); this returns back false because undefined gets converted to Nan because of the greater than operator which will always return back Nan or false.
    // alert(undefined < 0);  this returns back false for the exact same reason as above.
    //alert(undefined == 0); this returns back false because == is not mathmatical the only way this would return back true is if it was being compared against null.

            /* Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:
                    Treat any comparison with undefined/null except the strict equality === with exceptional 
                        care. Don’t use comparisons >= > < <= with a variable which may be null/undefined, 
                            unless you’re really sure of what you’re doing. If a variable can have these values,
                                 check for them separately.
                                    */

                                //summary//

                                /*
                                Comparison operators return a boolean value.
                                    - Strings are compared letter-by-letter in the “dictionary” order.
                                    - When values of different types are compared, they get converted to numbers 
                                        (with the exclusion of a strict equality check).
                                    - The values null and undefined equal == each other and do not equal any 
                                        other value.
                                    - Be careful when using comparisons like > or < with variables that 
                                        can occasionally be null/undefined. Checking for null/undefined 
                                            separately is a good idea.



