function interviewQuestions(job) {  
    if (job === 'designer') {
        return function (name) {
            console.log(`${name} can you please clarify what UX actually is ?`);
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(`${name} can you please tell me what do you teach ?`);
        }
    } else {
        return function (name) {
            console.log(`${name}, what do you do?`);
        }
    }
}

var teacherQuestion = interviewQuestions('teacher');
teacherQuestion('Rebecca');

var teacherQuestion = interviewQuestions('designer');
teacherQuestion('Mena');