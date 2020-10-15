// ----Global Variables----
var score = 0;
var GameRunning = true;

var Questions = function () {
    this.QuestionsList = [
        {
            Q : 'what your type of songs?',
            A : '1',
            possibleAnswers : ['Pop', 'Rock']
        },
        {
            Q : 'what is your fav color ?',
            A : '0',
            possibleAnswers : ['Black', 'green']
        },
        {
            Q : 'who is your bestfriend ?',
            A : '1',
            possibleAnswers : ['foo', 'baz']
        }
    ];
}


// ----init Game----
while(GameRunning) {


    // 1- generate question 
    var questionGenerated = generateQuestion();
    // [questionPicked, possibleAnswers, questionObject]

    // 2- display the question with possible answers
    var displayFuncParameters = [questionGenerated[0], questionGenerated[1]]; // [questionPicked, possibleAnswers]

    displayQuestion(displayFuncParameters);

    // 3- take the input from user 
    var userAnswer = returnInput();

    // 4- validate the user input with the correct answer 
    var questionObject = questionGenerated[2]; 
    // questionObject

    answerValidation(userAnswer, questionObject);
    // answerValidation(userAnswer, {Q: "...", A: "...", possibleAnswers: [, ,]});

}


function generateQuestion() {

    var q = new Questions();
    var randNum = Math.floor(Math.random() * 3);
    
    var questionPicked = q.QuestionsList[randNum].Q;

    var possibleAnswers =  [q.QuestionsList[randNum].possibleAnswers[0], q.QuestionsList[randNum].possibleAnswers[1]];

    var questionObject = q.QuestionsList[randNum];
    // questionObject = { Q : 'what your type of songs?', A : '1', possibleAnswers : ['Pop', 'Rock']}

    return [questionPicked, possibleAnswers, questionObject];

}


function displayQuestion(array) {

    // display the question
    console.log(array[0]);

    // display possible answer to this question
    console.log('0 : ' + array[1][0]);
    console.log('1 : ' + array[1][1]); 

}

function returnInput(userAnswer) {

    var userAnswer = prompt('please select the correct answer (just type the number)');
    return userAnswer;

}

function answerValidation(userInput, questionObject) {

    if (userInput == MyAnswer(questionObject)) {

        score += 1;
        console.log(`Good Job! Your Score Now Is ${score}`);

    } else if (userInput == 'exit') {

        GameRunning = false;
        console.log("Hope You Enjoyed!");

    } else {

        console.log('Wrong! Try Again.');
        generateQuestion();

    }
}

// returning the Answer of question
function MyAnswer(questionObject) {
    return questionObject.A;
}
