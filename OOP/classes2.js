
// ES5
function Person5(name, yearOfBirth, job) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

Person5.prototype.calculateAge = function () {
    let year = new Date().getFullYear();
    return year - this.yearOfBirth;
}

// let john = new Person5('john', 1999, 'dev');
// console.log(john.calculateAge());

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype); // this allow us inherit the methods in the super class prototype

Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}

let ath = new Athlete5('john', 1999, 'designer', 5, 10);  