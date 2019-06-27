///////////////////////////////////////
// Lecture: Hoisting : look at notes in notebook

// When the execution context is called from the function a VO is created with properties
// that point to that function( even before the code is executed)
//only work for function declorations
/*
calcAge(1965);

function calcAge(year) {
  console.log(2016 - year);
}

var retirement = function(year) {
  console.log(65 - (2016 - year));
};

retirement(1990);
************/
// THIS WORKS WHEN CALLED RESULT IS 39

//BUT LETS TRY TO CALL IT BEFORE
/*
retirement(1965);
//Does not work because its a function expression

var retirement = function(year) {
  console.log(65 - (2016 - year));
};
*************************/

//Hoisting Variables
//Use variable before you declare it in code
// we have the value but its not defined
/*
console.log(23);
var age = 23;
function foo() {
  var age = 65;
  console.log(age);
}

foo(); // 65
console.log(age); // 23
******************/
// Print differently its because age variable gets store in the global execution.
///////////////////////////////////////
// Lecture: Scoping

// First scoping example
/*
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}
*/
// Example to show the differece between execution stack and scope chain
/*
var a = "Hello!";
var c = "Hey!";
first();

function first() {
  var b = "Hi!";
  second();
  function second() {
    third();
  }
  function third() {
    var d = "John";
    console.log(a + b + c + d);
  }
}
*/
///////////////////////////////////////
// Lecture: The this keyword
/*
var age = 10;
function third() {
  this.age = age;
  console.log(age);
}

var Age = {
  name: "Nate",
  age: 20,
  calcAge: function() {
    return this.age - 10;
  }
};

console.log(Age.calcAge());
*/

/********** Practical THIS KEYWORD
 *
 */

//Using the this keyword with mutliple functions lexical //
/****

var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);
    // the THIS keyword goes back to the global object //
    // when a regular function call happens the default object is the window object.
    /*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
    
  }
};


john.calculateAge();

// The THIS variable is only assigned a value as soon as an object calls a method

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};

// SAY YOU WANTED TO CALCULATE AGE FOR MIKE AS WELL.
//Method borrowing //
// Put the method of the object inside a variable.
mike.calculateAge = john.calculateAge;

mike.calculateAge();
*/
