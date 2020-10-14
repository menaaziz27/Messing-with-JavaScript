// application using closures
// defining different yearOfBirth for different people from different regions
// and calculating the years remained for their retirement specific to each region of them

function retirement(retirementAge) {
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        return retirementAge - age;
    }
}

function people_proto(yearsArr, retirementAge) {
    this.years = yearsArr;
    this.retirement = retirementAge;
}

var US = new people_proto([1990, 1999, 2001, 2004], retirement(66));

var EU = new people_proto([1967, 1988, 1977, 2000], retirement(65));

var AU = new people_proto([1991, 1985, 1979, 1965], retirement(67));

function calcYears(peopleObj) {

    var remainYears = [];

    for (var i = 0; i < peopleObj.years.length; i++) {
        remainYears.push(peopleObj.retirement(peopleObj.years[i]));
    }

    return remainYears;
}

var USAs = calcYears(US);
console.log(USAs);

var EURs = calcYears(EU);
console.log(EURs);

var Australlians = calcYears(AU);
console.log(Australlians);

