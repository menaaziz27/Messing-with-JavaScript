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

    var calculateTotal = function (type) {

        var sum = 0;

        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });

        data.totals[type] = sum;

    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
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
        },                    //inc-0
        deleteItem: function (type, id) {

            var ids = data.allItems[type].map(function (current) {
                return current.id;
            });

            var index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function () {
            // calculate total exp and total inc 
            calculateTotal('exp');
            calculateTotal('inc');
            // calculate the budget = income - expense 
            data.budget = data.totals.inc - data.totals.exp;
            // calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }

        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalexp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function () {
            console.log(data);
        }
    }


})();

// -----------------------------------------------------------------------------------------

var UICntoller = (function () {

    var domStrings = {
        inputTypes: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(domStrings.inputTypes).value,
                description: document.querySelector(domStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value)
            };
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;

            // create HTML string with replace portions
            if (type === 'inc') {
                element = domStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                    '<div class="item__value">%value%</div>' +
                    '<div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            } else if (type === 'exp') {
                element = domStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div>' +
                    '<div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div>' +
                    '<div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline">' +
                    '</i></button></div></div></div>';
            }
            // replace the strings with the actual data 
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            // insert the new string in the HTML content 
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function (selectorID) {

            var el = document.getElementById(selectorID);

            el.parentNode.removeChild(el);
        },

        clearFields: function () {
            var fields, arrayField;

            fields = document.querySelectorAll(domStrings.inputDescription + ', ' + domStrings.inputValue);

            arrayField = Array.prototype.slice.call(fields);

            arrayField.forEach(function (current, index, array) {
                current.value = "";
            });

            arrayField[0].focus();
        },

        displayBudget: function (obj) {
            document.querySelector(domStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(domStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(domStrings.expensesLabel).textContent = obj.totalexp;

            if (obj.percentage > 0) {
                document.querySelector(domStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(domStrings.percentageLabel).textContent = '---';
            }
        },

        getDomStrings: function () {
            return domStrings;
        }
    }

})();

// -----------------------------------------------------------------------------------------

var controller = (function (budgetCtrl, UICtrl) {

    function setupEventListeners() {

        var DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.inputButton).addEventListener('click', CtrlAddItem);


        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                CtrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', CtrlDeleteItem)
    }

    function updateBudget() {
        // 1- calculate the budget 
        budgetCtrl.calculateBudget();
        // 2- return the budget
        var budget = budgetCtrl.getBudget();
        // 3- display the budget in the UI
        UICtrl.displayBudget(budget);
    }

    function updatePercentages() {

    }

    var CtrlAddItem = function () {
        var input, newItem;

        // 1- Get the field input data 
        input = UICtrl.getInput();
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2- add the item to the budget controller 
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // 3- add the item to the UI 
            UICtrl.addListItem(newItem, input.type);

            // 4- clear fields 
            UICtrl.clearFields();
        }
        // 5- calculate budget
        updateBudget();

        // 6- update percentages
        updatePercentages();
    };

    var CtrlDeleteItem = function (event) {

        var itemID, splitID, type, id;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            id = parseInt(splitID[1]);
        }

        // delete the item from data structure
        budgetCtrl.deleteItem(type, id)
        // delete item from UI 
        UICtrl.deleteListItem(itemID);
        // update and show the new budget 
        updateBudget();
        // update percentages
        updatePercentages();

    }


    return {
        init: function () {
            console.log("Application has started");
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalexp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }

})(budgetController, UICntoller);

controller.init();

