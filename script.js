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
