// OBJECTS ANF FUNCTIONS
/* LECTURE NOTES

Everything is an object 
(kinda)

Two types  Primitives which are everything with a data type. Number, boolean, strings, undefined, and null.

Everything else is an object - Arrays, functions, objects, dates, wrappre for numbers,strings, boolean 

//OBJECT ORIENTED PROGRAMING 

Objects used to interact with one another that use methods, and properties. 

Used to store data, strcture applications into modules and keeping code clean. 

//CONSTRUCTORS AND INSTANCES IN JS 

Person [name], [yearofBirth], [job], calculateAge().

The constructor acts a blueprint which you can use to create variables. 

//INHERITANCE IN GENERAL 

Object is based on another object, one object gets access to another objects 

Ex: You have an person constructor and an athlete constructor, 
thus you have the athlete object inhert the properties from the person constructor since they share qualities. 

// INHERTIANCE IN JS: PROTOYPES AND PROTOTYPE CHAINS //

Prototype property is where you put the properiteis and methods you want another constructor to inherit


//SUMMARY 

Every JS object has a prototype propert which makes inhertiance possible 

Tht prototype property of an object is where we put methods and properties that we want other objects to inherit 

Constructor Prototype is NOT the prototype of the constructor itself, 
its the prototype of ALL instances that are created through it. 

When a certain method(or property) is called, the search start in the object itself, 
and if it cannot be found, the search moves on to teh objects prototype. 
This continues until the method is found. 



*/
/*
// CREATING OBJECTS : Functions Constructors

// MAKE IT INTO A BLUEPRINT
// FIRST LETTER IS CAPITAL FOR FUNCTION CONSTRUCTORS

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//INHERTIANCE this prototype can be inherted and called without having it in the variable.
//In practice

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = "Smith";
// All calls smith even though the function object does not have this
//do same with properties

// This is the function constructor used to make differnt instances and to keep code dry
// new operator calls a new empty object, then function is called
//calling a function creates a new execution process
// new operator allows this. to call within a new object thats not within the global object
// new operator points the this. variable not at the global object but a new empty object
// the new operator makes it so you create a new object everytime you make an instance but replaces the one within the function.
var john = new Person("john", 1990, "teacher");

john.calculateAge();
//result is 26

var jane = new Person("jane", 1969, "teacher");

var mark = new Person("mark", 1948, "retired");
*/
/* My example for function constructors

var outfit = function (top, bottom ,shoes){
    this.top = top;
    this.bottom = bottom;
    this.shoes = shoes;
}

outfit.prototype.brand = 'Nike';

var nateFit = new outfit('Black Nike top', 'Black Dickes + a belt', 'White airforces');


console.log(nateFit.brand);

*/
/*
// Object.create
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "john";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});

// Primitives vs Objects
// variables containing primitives hold the data inside the variables themselves
//variables associated with objects dont contain the object but a refrence
//where the object sits and store. (not a real copy)

var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);

// RESULT is 23 and 46 two different refrences
//OBJECTS

var obj1 = {
  name: "jane",
  age: 26
};

var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//RESULT BOTH 30

// Functions
/*
var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/
// First class functions: Passings functions as agruments
//Functions are also objects in Javascript
//Function is an instance of the object type
//fn = function and arr = array
/*
var years = [1990, 1965, 1937, 2005, 1998];
//GENERIC FUNCTION
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);
// SHOWS ALL AGES
function isFullAge(el) {
  return el >= 18;
}

var fullAges = arrayCalc(ages, isFullAge);

console.log(fullAges);
// TRUE TRUE TRUE FALSE TRUE

function maxHeartRate(el) {
    if (el >= 18 && =< 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    

}

var rates = arrayCalc(ages, maxHeartRate);

//Rounds it the closes to the integer

console.log(rates);
*/

// Functions returning functions
// Ask questions depending on the job interview
//Returns an entire function we can use later
//Always first class functions.
/*
function interviewQuestions(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + "can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}
//Var question teacher
var teacherQuestion = interviewQuestions("teacher");

//Question Designer
var designerQuestion = interviewQuestions("designer");

// Other Question

var otherQuestion = interviewQuestions("Engineer");
//Calls variable
teacherQuestion("john");
otherQuestion("Nate");
*/

// FUNCTION RETURNS WITH FUNCTIONS PRACTICE
// ASKING ABOUT BRANDS
/******
 

function brandQuestions(brand) {
  if (brand === "nike") {
    return function(name) {
      console.log("Why is Nike your favorite brand " + name + "?");
    };
  } else if (brand === "addidas") {
    return function(name) {
      console.log("Sorry, " + name + " we dont do those three stripes.");
    };
  } else {
    return function() {
      console.log("Which brand do you like the most?");
    };
  }
}

var nikeAnswer = brandQuestions("nike");

nikeAnswer("Nate");
 */

/*************
 * Immediately involved function expressions IIFE
 * Game where we won a game where a random score that is >= 5 lose if its <5
 * Keep the score hidden within the game
 */
/*
function Game() {
  var score = Math.random * 10;
  console.log(score >= 5);
}

Game();

//Create a private variable dont need to create a whole function but use an IIFE
//THIS IS AN IIFE
//SAVE VARIABLES AND THIS IS FOR DATA PRIVAcy
(function(goodLuck) {
  var score = Math.random * 10;
  console.log(score >= 5 - goodLuck);
})(5);

*/
/************
 *  LECTURE: CLOSURES
 */
// A closer is getting access to a variable thats not yours?
//Ex: reitrementAge call is able to call the a variable
// Closure: inner function always has access to the variables and parameters of its outer
//function, even after the outer function is returned.
/*
function retirement(retirementAge) {
  var a = " years left until retirement. ";
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUs = retirement(66);
var retirementGermany = retirement(67);
var retirementIceland = retirement(67);

retirementUs(1990);
// Result 40 years until retirement

retirement(66)(1990);
//gives same result as above works left to right //
*/
// Challenge change the interview questions using closures
/*
function interviewQuestions(job) {
  var a = " can you please explain what Ux design is?";
  var b = " what subject do you teach";
  var c = ", What do you do?";
  return function(name) {
    if (job === "designer") {
      console.log(name + a);
    } else if (job === "teacher") {
      console.log(name + b);
    } else {
      console.log(name + c);
    }
  };
}

var designerAns = interviewQuestions("designer");
var teacherAns = interviewQuestions("teacher");
designerAns("Nate");
teacherAns("jane");

interviewQuestions("engineer")("Niko");
*/
/*
function interviewQuestions(job) {
    if (job === "designer") {
      return function(name) {
        console.log(name + "can you please explain what UX design is?");
      };
    } else if (job === "teacher") {
      return function(name) {
        console.log("What subject do you teach " + name + "?");
      };
    } else {
      return function(name) {
        console.log("Hello " + name + ", what do you do?");
      };
    }
  }
  //Var question teacher
  var teacherQuestion = interviewQuestions("teacher");
  
  //Question Designer
  var designerQuestion = interviewQuestions("designer");
  
  // Other Question
  
  var otherQuestion = interviewQuestions("Engineer");
  */



  //////////////////////////////
  // Lecture: Bind, Call and Apply
  
/*
  var john = {
      name: 'john',
      age: 26,
      job:'teacher',
      presentation: function(style, timeOfDay) {
          if (style === 'formal'){
              console.log( 'Good ' + timeOfDay + ', ladies and gentle man I\'m ' + this.name + this.job + ' and I\'m ' + this.age + ' years old');
          } else if (style === 'friendly') {
console.log('Hey! What\'s up? I\'m ' + this.name + ' a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.' );
          }
      }
  }


  var emily = {
      name: 'emily',
      age: 35,
      job: 'designer'
  };
*/

/*
  john.presentation('formal', 'morning');
  //Call method, this changes the this. variable from john to emily
  // This allows us to use johns mehthod on emily. 
  john.presentation.call(emily, 'friendly', 'afternoon');



//Bind method doesnt immediately call the function, but produces a copy of a function to store it somewhere 
// USEFUL FOR PRESET ARGUMENTS 

//BIND METHOD WITH PRESET ARGUMENTS 

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');
*/
  //Apply method is very similar to the Call method, 
  //only difference is accepts the this. argument as an array 
/*
  john.presentation.apply(emily, ['friendly', 'afternoon']);
  */

/*
 var years = [1990, 1965, 1937, 2005, 1998];
 //GENERIC FUNCTION
 function arrayCalc(arr, fn) {
   var arrRes = [];
   for (var i = 0; i < arr.length; i++) {
     arrRes.push(fn(arr[i]));
   }
   return arrRes;
 }
 
 function calculateAge(el) {
   return 2016 - el;
 }
 

 

 // SHOWS ALL AGES
 function isFullAge(limit, el) {
   return el >= limit;
 }

 var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

*/

/// CODING CHALLENGE 7 
// Use a method and use prompt to ask for the correct answer
//Method 




/// Console.log and choose one at random with questions and answers 


/// No other code will override with an IIFE
/*
(
    function(){
        function Questions(question, answer, correct, score){
            this.question = question;
            this.answer = answer;
            this.correct = correct;
           
            }
        
   
        Questions.prototype.displayQuestion= function(){
            console.log(this.question);
            //loop for all the possible answers 
            for( var i = 0; i < this.answer.length; i++ )
            {
                console.log(i + ":" + this.answer[i]);
            }
        }
        
        
        Questions.prototype.checkAnswer = function(answer){
            if (answer === this.correct){
               console.log('Congrats you winner!'); 
              
            } else {
                console.log('Sorry..Try again');
               
            } 
            points();
        }

  

        
      
   
        
            var q1 = new Questions('What is my name?', 
              ['Nate' , 'Niko'] , 0);
            var q2 = new Questions('Favorite color?', 
            ['blue', 'red', 'yellow','black'], 
            0);
            var q3 = new Questions('Favorite Brand?', ['Addidas', 'Nike', 'supreme'], 1);
           
           
       
            var questions = [q1, q2, q3];

      function nextQuestion(){
        var n =  Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Enter number');
        questions[n].points();
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer));
            nextQuestion();
           
            
        }
      }
     
      nextQuestion();
        
        
    })
();
*/

/********
 * CODING CHALLENGE 2
 */
/*
  var johnScore =[89, 120, 103];
  var mikeScore =[116, 94, 123];
  function sum(total,num){
      return total + num;
  }

  var johnSum = johnScore.reduce(sum)
  var mikeSum = mikeScore.reduce(sum)
  
  var averageJohn = johnSum / johnScore.length;
  var averageMike = mikeSum / mikeScore.length;
  
  console.log(averageJohn);
  console.log(averageJohn);



*/


/********
 * CODING CHALLENGE 3
 */



    
/*



 function tipCalculator(bill){
    var tipBills;
if(bill < 50){
    tipBills = bill * (20/100);
    return tipBills;
} else if ( bill >= 50 && bill <= 200){
    tipBills = bill * (15/100);
    return Math.floor(tipBills);
} else {
    tipBills = bill * (10/100);
    return tipBills;
}
}



var bills =[ 124, 48, 268];



var allTips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalCost =[allTips[0] + bills[0], allTips[1] + bills[1], allTips[2] + bills[2]];


console.log(allTips);
console.log(finalCost);


*/

/************
 * Objects and Methods
 */

/*
 var Person = function(name, height, mass){
     this.name = name;
     this.height = height;
     this.mass = mass;
 }


 Person.prototype.calcBMI = function(){
   this.BMI = this.mass / this.height ** 2;
 }

 var john = new Person ('John', 1.73, 89);
 var mark = new Person ('Mark', 2, 65);
 
function compare(){
    if( john.calcBMI() > mark.calcBMI()){
        console.log( john.name + ' has a higher score of ' + john.BMI + '.' );
    } else if(john.BMI === mark.BMI){
        console.log( john.name + mark.name + ' have tied with ' + john.BMI + '.' );
    }
    else {
        console.log( mark.name + ' has a lower score of ' + mark.BMI + '.');
    }
}
compare();    

*/

var bills = {
    bills: [124,48,268,180],
   name: 'John';
    tipCalculator: function(bill){
        if(bill < 50){
            return bill * (20/100);
        } else if ( bill >= 50 && bill <= 200){
          return Math.floor(bill * (15/100));
            
        } else {
            return bill * (10/100);
          
        }

    }
   for (var i= 0; )
}; 





var tipPrice = [bills.tipCalculator(bills.b1), bills.tipCalculator(bills.b2) , bills.tipCalculator(bills.b3), bills.tipCalculator(bills.b4)];

var finalPrice = [tipPrice[0] + bills.b1 , tipPrice[1]+ bills.b2 , tipPrice[2] + bills.b3 , tipPrice[3]+ bills.b4 ];


console.log(tipPrice);
console.log(finalPrice);












































  




