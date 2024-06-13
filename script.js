/*const answer = "ECMAScript";
let guess; 

guess = prompt("What is the official name of JavaScript? ");
if (guess === answer){
  alert("Right!")
}
else alert("Wrong!");*/

/*let number;

number = prompt("Enter a number.");
if (number > 0){
  alert(1);
}
else if (number < 0){
  alert(-1);
}
else alert(0);*/

// let result = condition ? value1 : value2;



// let result = (a + b < 4) ? 'Below' : 'Over';

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
      '';