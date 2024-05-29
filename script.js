                                        //Logical operators//
                                
    /* There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). 
    Here we cover the first three, the ?? operator is in the next article.
    Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result 
    can also be of any type.
    Let’s see the details.
    */

                                            // OR (||) //

    // alert(true || true); this returns back true.
    // alert(true || false); this returns back true.
    // alert(false || true); this returns back true. 
    // alert(false || false); this returns back false.

    /* the result will always return back true unless both operands are false. if an oporand is not a boolean 
        then it is converted for the evaluation. for example the number '1' is treated as true and the number '0'
        is counted as false.*/

    if (1 || 0){
        //alert("truthy"); this will return back true because it converts the 1 to true and the 0 to false and as we have seen if there is a truth it sticks.
    }

    // most of the time the or oporator is used to check if various conditions are met and example is shown below.//

/*

    let hour = 13;

    if (hour < 9 || hour >16){
        console.log("office is closed");
    }
    else{
        console.log("office is open slut");
    }

        in the above example the or operator is being used to check that a condition is being met. this will display office is open.
    */ 
    /*
        let hour = 13;
        let isWeekend = true;

        if (hour < 8 || hour > 16 || isWeekend){
            console.log("the office is motherfucking closed bitch");
        }
        else{
            console.log("open bitch");
        }

        in the above example we can use the or operator to check various variables in one line of code. as the isWeekend variable is true this will display the shop is closed.
    */

        /*

        The OR || operator does the following:

        Evaluates operands from left to right.
        For each operand, converts it to boolean. If the result is true, stops and returns the original value 
        of that operand.
        If all operands have been evaluated (i.e. all were false), returns the last operand.
        A value is returned in its original form, without the conversion.
        In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is 
        found.

        an example of which can be found bellow.

        */

        //alert(1 || 0); 1 is the first true so so 1 is returned back.
        //alert(null || 1); 1 is once again the first true so it returns back 1.
        //alert(null || 0 || 1); same as the previous two, 1 is the first true so it returns back 1.
        //alert(null || undefined || 0); in this case there is no true so it returns back 0 the final 'OR'.

        let firstName = "";
        let lastName = "";
        let nickName = "";
        //alert(firstName || lastName || nickName || "anonymous"); using the above method we can use the if no truth is found thing to our advantage. as if no variable is full it will return back the last one in this case anonymous. 

        /* 

        Another feature of OR || operator is the so-called “short-circuit” evaluation. It means that || 
        processes its arguments until the first truthy value is reached, and then the value is returned 
        immediately, without even touching the other argument.
        The importance of this feature becomes obvious if an operand isn’t just a value, but an expression 
        with a side effect, such as a variable assignment or a function call.
        In the example below, only the second message is printed:

        */

        //true || alert("this message will not be seen as it will stop at truth.");
        //false || alert("this message will be seen as the first option is false.");

        //                              THE && (AND) OPERATOR.

        //The AND operator is represented with two ampersands &&: an example is shown below//

       // result = a && b; //

       // In classical programming, AND returns true if both operands are truthy and false otherwise://

       //alert(true && true); this comes back true because both operands are true. //
       //alert(false && true); this will return back false because one operand is false. //
       //alert(true && false); this will return back false because one of the operand is false. // 
       //alert(false && false); this returns back false because both operands are false. // 

       /*let hour = 12; 
       let minute = 30;

       if (hour == 12 && minute == 30){
        alert("the shop is open slut");
       } else{
        alert("the shop is shut slut!");
       }

       this will display "the shop is open because both operands are returning back true." */

       /*if (1 && 0){
        alert("fuck this bro");
       }

       the above block of code will never be displayed because both operands arnt true so the alert code block
       will never be run. */

       /*The AND && operator does the following:

        Evaluates operands from left to right.
        For each operand, converts it to a boolean. If the result is false, stops and returns the original 
        value of that operand.
        If all operands have been evaluated (i.e. all were truthy), returns the last operand.
        In other words, AND returns the first falsy value or the last value if none were found.

        The rules above are similar to OR. The difference is that AND returns the first falsy value while OR 
        returns the first truthy one.

        Examples: */

        //alert(1 && 0); this returns back true so it will display the last operand.
        //alert(1 && 5); this returns back '5' because the first operand is true so the second operand is displayed.
        // alert(null && 5); this returns back null because the first value is false so the original operand will be displayed. 
        // alert(0 && "No one will ever see this message!"); this displays back 0 because the first operand is false so the second operand will never be seen, its kinda sad really. 

        //We can also pass several values in a row. See how the first falsy one is returned://

        //alert(1 && 2 && null && 3); in this case null is returned as that is the first false value.//

        // alert(1 && 2 && 3); this displays 3 because its the last true value. 

        /* Precedence of AND && is higher than OR ||
            The precedence of AND && operator is higher than OR ||.

            So the code a && b || c && d is essentially the same as if the && 
            expressions were in parentheses: (a && b) || (c && d).*/



            //                  ! (NOT) not operator //

            /* the syntax for the not operator is '!' an exclamation mark. an exmple is as follws ...result = !value; */

            /*The operator accepts a single argument and does the following:

                Converts the operand to boolean type: true/false.
                Returns the inverse value. */
                
                //alert(!true); returns back false because its not(!)true;
                //alert(!0); returns back true because its not(!)false(0); 

            // the double !! is sometimes used to convert a value to a boolean. //

            //alert(!!"an empty string"); returns back true the first not makes it false the second makes it true.
            //alert(!!null); false, the first value is false the second not changes it to true then the second not turns it back to false.

            // The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||. //

            // test 1 // 

                /*
                Write an if condition to check that age is between 14 and 90 inclusively.

                “Inclusively” means that age can reach the edges 14 or 90.*/

    /*let minAge = 14;
    let maxAge = 90;
    let testAge = 41;

    if (testAge >= minAge && testAge <= maxAge){
        alert("your age is between 14 and 90");
    } else{
        alert("you are not the correct age! sorry like");
    }*/

    /* Write an if condition to check that age is NOT between 14 and 90 inclusively.

        Create two variants: the first one using NOT !, the second one – without it. */

    /*let testAge = 101;
    let maxAge = 90;
    let minAge = 14;

    if (testAge >= !minAge && testAge <= !maxAge){
        alert("your age is between 14 and 90");
    } else{
        alert("you are not the correct age! sorry like");
    }*/

    let user = prompt("please enter your username?");
    let master = "Admin";
    let password = "TheMaster";
    let passwordAttempt; 

   if(user === master){
    passwordAttempt = prompt("Please enter password");
        if(passwordAttempt === password){
            alert("welcome");
         }
         else if(passwordAttempt === "canceled" || passwordAttempt === null || passwordAttempt === ""){
            alert("canceled!");
         }
        else{
            alert("I dont know you!");
        }
   }
   else if(user === "canceled" || user === null || user === ""){
    alert("canceled!");
   }
   else{
    alert("I dont know you!");
   }
   console.log("fuck my life i think its done.")
   
