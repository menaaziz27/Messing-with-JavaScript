var Guy = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
};


Guy.prototype.calcAge = function () {
    console.log(2020 - this.birthYear);
}

Guy.prototype.lastName = 'William';

// john obj
var john = new Guy('john', 1996, 'designer');
john.calcAge()
console.log(john.job);

// Mina obj
var Mina = new Guy('Mina', 1999, 'dev');
Mina.calcAge();
console.log(Mina.job);

console.log(Mina.lastName);
console.log(john.lastName);


// this object of Object type
var obj = {
    name: 'object'
}