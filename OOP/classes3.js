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

}


class Athelet6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedals() {
        this.medals++;
        console.log(this.medals);
    }
}

let ath = new Athelet6('mina', 1998, 'developer', 5, 10);
ath.wonMedals();
console.log(ath.calculateAge());
