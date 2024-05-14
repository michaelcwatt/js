// strings - all about strings and shit //

const string1 = "A primitive string";
const string2 = 'another primitive string';
const string3 = `yet another primitive string`; // all of the strings 1-3 are whats known as primitive strings made using string literal.

const string4 = new String("a string object"); // this is a string object not entirely sure wht the purpose of it is yet.



let char1 = "cat";
let answer = char1.charAt(1);
// alert(answer); this is a mmethod used to return back the charachter of the string at position 1.

const a = "a";
const b = "b";
if (a < b){
    console.log(`${a} is less than ${b}`);
} 
else if (a > b){
    console.log(`${a} is more than ${b}`);
}
else {
    console.log(`${a} is equal to ${b}`);
}

// above is comparing strings it basically compares if a is less than b, followed by is a more than be, then will finally conclude by saying a is equal to b. its worth noting all string comparisions are case sensititve therefore its a good idea to conver toUpper or toLower.


// i have decided to stop this page here, odin did just tell me to book mark it and were moving onto functions which we havent covered yet. i know what one is and how to write one but still.

