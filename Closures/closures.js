function retirement(retirementAge) {
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + ' years left until retirement');
    }
}

var retirementUS = retirement(66);
var retirementEUR = retirement(65);
var retirementICEland = retirement(67);

retirementUS(1990);
retirementEUR(1990);
retirementICEland(1990);