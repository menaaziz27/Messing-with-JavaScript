// ES5
function Person5(name, yearOfBirth, job) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

Person5.prototype.calculateAge = function () {
    return 2020 - this.yearOfBirth;
}

let john = new Person5('john', 1999, 'dev');
console.log(john.calculateAge());

// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.job = job;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge() {
        let year = new Date().getFullYear();
        return year - this.yearOfBirth;
    }

    static hello() {
        console.log('Hello, Wolrd!');
    }
}


let mena = new Person6('mena', 2000, 'programmer');

console.log(mena.calculateAge());