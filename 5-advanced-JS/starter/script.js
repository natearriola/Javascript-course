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

var john ={
    name : 'John',
    yearOfBirth: 1990,
    job: 'teacher'

};

// MAKE IT INTO A BLUEPRINT 
// FIRST LETTER IS CAPITAL FOR FUNCTION CONSTRUCTORS

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job; 
    
}

//INHERTIANCE this prototype can be inherted and called without having it in the variable. 
//In practice 

Person.prototype.calculateAge = this.calculateAge = function(){
    console.log(2016 - this.yearOfBirth)
};

//do same with properties 

Person.prototype.lastName = 'Smith';

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
// All calls smith even though the function object does not have this

// This is the function constructor used to make differnt instances and to keep code dry
// new operator calls a new empty object, then function is called 
//calling a function creates a new execution process
// new operator allows this. to call within a new object thats not within the global object 
// new operator points the this. variable not at the global object but a new empty object
// the new operator makes it so you create a new object everytime you make an instance but replaces the one within the function. 
var john = new Person('john', 1990, 'teacher');

john.calculateAge();

//result is 26

var jane = new Person('jane', 1969, 'teacher');

var mark = new Person( 'mark', 1948, 'retired');

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