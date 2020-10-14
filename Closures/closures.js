function retirement(retirementAge) {
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + ' years left until retirement');
    }
}

// retirement(60)(1999);

var retirementUS = retirement(66);
var retirementEUR = retirement(65);
var retirementICEland = retirement(67);

retirementUS(1990);
retirementEUR(1990);
retirementICEland(1990);


function interviewQuestions(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(`${name} can you please clarify what UX actually is ?`);
        } else if (job === 'teacher') {
            console.log(`${name} can you please tell me what do you teach ?`);
        } else {
            console.log(`${name}, what do you do?`);
        }
    }
}

interviewQuestions('teacher')('John');