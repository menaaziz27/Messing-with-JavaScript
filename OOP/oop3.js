var personProto = {
    calcAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};


var john = Object.create(personProto);
john.name = 'john';
john.job = 'developer'
john.yearOfBirth = 1999;

var jane = Object.create(personProto, {
    name: { value : 'Jane' },
    job: { value : 'Designer' },
    yearOfBirth: { value : 1969 }
});


// Note
// thie big difference between the Object.create and the function constructor
// that the newly created object is inherits from the constructor's prototype property
// but here the newly created object is inherits directly from the one we passed to the parameter
// Object.create(personProto) 