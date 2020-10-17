var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

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
        addItem: function (type, des, val) {

            var newItem, ID;
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // adding the new item in the data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },
        testing: function () {
            console.log(data);
        }
    }


})();


var UICntoller = (function () {

    var domStrings = {
        inputTypes: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeList: '.income__list',
        expenseList: '.expenses__list'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(domStrings.inputTypes).value,
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputValue).value
            };
        },
        addListItem: function (obj, type) {
            var html, element;

            // create HTML string with replace portions
            if (type === 'inc') {
                element = domStrings.incomeList;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div> \
                <div class="right clearfix">  <div class="item__value">%value%</div> <div class="item__delete">\
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>  </div></div></div>';
            } else if (type === 'exp') {
                element = domStrings.expenseList
                html = '<div class="item clearfix" id="expense-0"><div class="item__description">\
                Apartment rent</div><div class="right clearfix">\
                <div class="item__value">- 900.00</div><div class="item__percentage">21%</div>\
                <div class="item__delete">\<button class="item__delete--btn"><i class="ion-ios-close-outline">\
                </i></i></button></div></div></div>';
            }
            // replace the strings with the actual data 
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            // insert the new string in the HTML content 
            document.querySelector(element).insertAdjacentElement('beforeend', newHtml);
        },
        getDomStrings: function () {
            return domStrings;
        }
    }

})();


var controller = (function (budgetCtrl, UICtrl) {

    function setupEventListeners() {

        var DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.inputButton).addEventListener('click', CtrlAddItem);


        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                CtrlAddItem();
            }
        });
    }

    var CtrlAddItem = function () {

        // 1- Get the field input data 
        var input = UICtrl.getInput();

        // 2- add the item to the budget controller 
        var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3- add the item to the UI 
        UICtrl.addListItem(newItem, input.type);
        // 4- calculate the budget 

        // 5- display the budget in the UI
    };


    return {
        init: function () {
            console.log("Application has started");
            setupEventListeners();
        }
    }

})(budgetController, UICntoller);

controller.init();

