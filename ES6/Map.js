var question = new Map();

question.set('question', 'what is the official version of javascript?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer :D');
question.set(false, 'Wrong answer try again');
// console.log(question);
// console.log(question.get('question'));
// console.log(question.size);

// if (question.has(4)) {
//     console.log(question.delete(4)); // if there's a key names 4 it will return true otherwise false
// }


// question.forEach((value, key) => console.log(`this is the key (${key}) and this is the value (${value})`));

// for (let key of question) {
//     console.log(key); // this returns array of key and value
// }

// for (let [key, value] of question) {
//     console.log(key + ' => ' + value);
// }

// for (let [key, value] of question.entries()) {
//     console.log(key, value);
// }

// for (let key of question) {
//     console.log(key);
// }
for (let [key, value] of question.entries()) {
    if (typeof key === 'number')
        console.log(key + ' : ' + value);
}



let ans = parseInt(prompt("enter the answer (numbers only)"));
console.log(question.get(ans === question.get('correct')));
