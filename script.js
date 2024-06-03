//                  MAKING DECISIONS ON MY CODE                             //

/* This section will be all about making decisions. in life we all make decisions everyday my programmes are 
    the exact same. */

/*  if(condition){
        code block that will be run if condtion is true
    }
    else{
        this code block will run if the condition is false.
    }

    walkthough....

    1. keyword if.
    2. the condition is checked usually a comparison or does something exist or something to check. 
        this uses the comparison operators that i have previously looked at.
    3. if the condtion mentioned above is found to be true then the code block below is then executed between the
        parenthesis. 
    4. the code block is run or the program moves to the next command ... else.
    5. else is run if the original condition is found to be false. 
    6. the code block between the following parenthesis is run. 

    its actually very user friendly to read essentially the code is saying if condition 1 is true run this code else 
    run this code.

    you can also negate the second else statement and just have a line of code to execute after the fact but you
    need to be careful with this as this code will not be controlled by the if statement.

    an example of the code can be seen below*/

   /* let shoppingDone = false;
    let childsAllowence; 

    if (shoppingDone === true){
        childsAllowence = 10;
    }
    else{
        childsAllowence = 5;
    }
    console.log(childsAllowence);
    
    the code above will always return back false for the child allowance therefore the child will only ever 
    // receive 5 lol.*/

    /*

    const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}

this is a more extreme example but the basic idea is the same, just lots of else if options. theres lots above i dont 
understand but at the same time theres lots i do.*/

/*Here we've got an HTML <select> element allowing us to make different weather choices, and a simple paragraph.
In the JavaScript, we are storing a reference to both the <select> and <p> elements, and adding an event listener 
to the <select> element so that when its value is changed, the setWeather() function is run.
When this function is run, we first set a variable called choice to the current value selected in the <select> 
element. We then use a conditional statement to show different text inside the paragraph depending on what the
 value of choice is. Notice how all the conditions are tested in else if () { } blocks, except for the first 
 one, which is tested in an if () { } block.
The very last choice, inside the else { } block, is basically a "last resort" option — the code inside it will 
be run if none of the conditions are true. In this case, it serves to empty the text out of the paragraph if 
nothing is selected, for example, if a user decides to re-select the "--Make a choice--" placeholder option 
shown at the beginning.*/

/*We wanted to make a special mention of testing boolean (true/false) values, and a common pattern you'll 
come across again and again. Any value that is not false, undefined, null, 0, NaN, or an empty string ('') 
actually returns true when tested as a conditional statement, therefore you can use a variable name on its own
 to test whether it is true, or even that it exists (that is, it is not undefined.) So for example:*/

 /*let cheese = "chedder";

 if(cheese){
  alert("cheese is available, why not have some cheese on toast.");
 }
 else{
  alert("no cheese on toast for you today *sad face*");
 }*/

 // in the above example because the value has something in it 'chedder' the value will return as true.

                                //SWITCH STATEMENT// 

  /* When there are multiple logical oporators the syntax can be a pain in the ass, this is where switch statments 
  come into play. the syntax is shown below.

  switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}*/

/*Ternary operator
There is one final bit of syntax we want to introduce you to before we get you to play with some examples. 
The ternary or conditional operator is a small bit of syntax that tests a condition and returns one 
value/expression if it is true, and another if it is false — this can be useful in some situations, and can
 take up a lot less code than an if...else block if you have two choices that are chosen between via a 
 true/false condition. The pseudocode looks like this:

 condition ? run this code : run this code instead */

 /*const greeting = isBirthday;
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";*/

  
