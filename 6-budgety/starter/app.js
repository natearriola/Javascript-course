///USING MOSUDLES AND THE PATTERN
//Private and public data, encapsulation
// Create pieces of code that work together but seperated by modules
// Data encapsulation -

// BUDGET CONTROLLER
var budgetController = (function() {
  //Ways to distinguish for different income and expenses
  //Store in an object
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // Data structure, Keeps tracks of all income and expenses, precentages

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      // [1 2 3 4 5] next ID = 6
      // [1 2 4 6 8], next ID = 9
      //ID = last ID + 1

      //Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //Create new Items base on 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      //Push it into our data structure
      data.allItems[type].push(newItem);
      //Return the new element
      return newItem;
    },
    testing: function() {
      console.log(data);
    }
  };
})();

// UI CONTROLLER
var UIController = (function() {
  // DOM strings
  var DOMString = {
    inputType: ".add__type",
    inputDesc: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  // GET INPUT
  //FUNCTION YOU WANT TO USE IN A CONTROLLER. (SO A PUCLIC METHOD)
  return {
    getInput: function() {
      return {
        //Controller has to call all 3 values, how do you return all three?
        // Put it into an object and return the object.
        // Will be either inc or exp
        type: document.querySelector(DOMString.inputType).value,
        description: document.querySelector(DOMString.inputDesc).value,
        value: document.querySelector(DOMString.inputValue).value
      };
    },
    getDOMString: function() {
      return DOMString;
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var setUpEventListeners = function() {
    //Get data
    var DOM = UICtrl.getDOMString();
    // this is for the button
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 && event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  //DOM LIST FROM UI CTRL

  var ctrlAddItem = function() {
    var input, newItem;
    // 1. Get the input data
    input = UICtrl.getInput();

    //2. Add item to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. Add item to the UI

    // 4. Calculate Budget

    // 5. Display the Budget on the UI
  };

  return {
    init: function() {
      setUpEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
