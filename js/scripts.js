var add = function(number1, number2) {
return number1+number2;
};

var subtact = function(number1, number2) {
  return number1-number2;
};

var multiply = function (number1, number2) {
  return number1*number2;
};

var divide = function (number1, number2) {
  return number1/number2;
};

var number1 = parseInt(prompt("enter a number:"));
var number2 =parseInt( prompt("enter another number:"));
alert(multiply(number1, number2));
