// application using closures
// defining different yearOfBirth for different people from different regions
// and calculating the years remained for their retirement specific to each region of them

function retirement(retirementAge) {
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        return retirementAge - age;
    }
}

// var retirementUS = retirement(66);
// var retirementEUR = retirement(65);
// var retirementICEland = retirement(67);

// var UsPeople = [1990, 1999, 2001, 2004];

var US_people_obj = {
    years : [1990, 1999, 2001, 2004],
    retirement: retirement(66)
}

var EurPeople = {
    years : [1967, 1988, 1977, 2000],
    retirement : retirement(65)
}


var AusPeople = {
    years : [1991, 1985, 1979, 1965],
    retirement: retirement(67)
} 


function calcYears(peopleObj) {

    var remainYears = [];

    for (var i = 0; i < peopleObj.years.length; i++) {
        remainYears.push(peopleObj.retirement(peopleObj.years[i]));
    }

    return remainYears;
}

var USAs = calcYears(US_people_obj);
console.log(USAs);

var EURs = calcYears(EurPeople);
console.log(EURs);

var Australlians = calcYears(AusPeople);
console.log(Australlians);


// console.log('Americans years specific to America retirement age');
// var americans = calcYears(UsPeople);
// console.log(americans);

// console.log('Europeans years specific to Europe retirement age');
// var European = calcYears(EurPeople);
// console.log(European);

// console.log('Australlians years specific to Australlia retirement age');
// var Australlians = calcYears(AusPeople);
// console.log(Australlians);
