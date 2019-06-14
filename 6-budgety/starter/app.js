///USING MOSUDLES AND THE PATTERN 
//Private and public data, encapsulation 
// Create pieces of code that work together but seperated by modules 
// Data encapsulation - 

// BUDGET CONTROLLER
var budgetController = (function(){

   


})();

// UI CONTROLLER
var UIController = (function(){
// DOM strings
var DOMString = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
};


// GET INPUT 
//FUNCTION YOU WANT TO USE IN A CONTROLLER. (SO A PUCLIC METHOD)
return{ 
    getInput: function(){
       return {
 //Controller has to call all 3 values, how do you return all three?
        // Put it into an object and return the object.
        // Will be either inc or exp
        type: document.querySelector(DOMString.inputType).value,
        description: document.querySelector(DOMString.inputDesc).value,
        value: document.querySelector(DOMString.inputValue).value
       };
    },
    getDOMString: function(){
        return DOMString;
    }
}

 

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

var setUpEventListeners = function(){
    var DOM = UICtrl.getDOMString();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 && event.which === 13){
ctrlAddItem();
    }}
};

//DOM LIST FROM UI CTRL

var ctrlAddItem = function(){
        // 1. Get the input data
            var input = UICtrl.getInput();
            
        //2. Add item to budget controller

        // 3. Add item to the UI 

        // 4. Calculate Budget 

        // 5. Display the Budget on the UI 

};

return{
    init: function(){
        setUpEventListeners();
    }
};
    
    
})(budgetController, UIController);

controller.init();
