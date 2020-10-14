// application using closures
// defining different yearOfBirth for different people from different regions
// and calculating the years remained for their retirement specific to each region of them

function retirement(retirementAge) {
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        return retirementAge - age;
    }
}

var retirementUS = retirement(66);
var retirementEUR = retirement(65);
var retirementICEland = retirement(67);

var UsPeople = [1990, 1999, 2001, 2004];
var EurPeople = [1967, 1988, 1977, 2000];
var AusPeople = [1991, 1985, 1979, 1965];

function calcYears(listOfPeople) {

    var remainYears = [];

    for (var i = 0; i < listOfPeople.length; i++) {
        remainYears.push(retirementUS(listOfPeople[i]));
    }

    return remainYears;
}
console.log('Americans years specific to America retirement age');
var americans = calcYears(UsPeople);
console.log(americans);

console.log('Europeans years specific to Europe retirement age');
var European = calcYears(EurPeople);
console.log(European);

console.log('Australlians years specific to Australlia retirement age');
var Australlians = calcYears(AusPeople);
console.log(Australlians);
