// ES5
var name5 = 'john';
var age5 = 19;
name5 = 'mina'
console.log(name5);

// ES6
const name6 = "ahmed";
let age6 = 20;
// name6 = "Error"; // throw error 
console.log(name6);


// ES5 functions

function DriverLicence5(isAllowed) {
    if (isAllowed) {
        var firstName = 'John';
        var yearOfBirth = 1999;

    }
    console.log(firstName + ' is born in ' + yearOfBirth);
}

DriverLicence5(true);

// Es6

// function DriverLicence6(isAllowed) {
//     if (isAllowed) {
//         const firstName = 'John';
//         let yearOfBirth = 1999;
//     }
//     console.log(firstName + ' is born in ' + yearOfBirth); // firstName is not defined

// }

// DriverLicence6(true);


function DriverLicence6(isAllowed) {
    const yearOfBirth = 1990;
    let firstName = 'john';
    if (isAllowed) {
        firstName = 'John';
    }
    console.log(firstName + ' is born in ' + yearOfBirth); // firstName is not defined

}

DriverLicence6(true);


// let i = 23; // block scoperd
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

// var i = 23; // block scoperd
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

let i = 3;
var i = 5;
console.log(i); // Identifier 'i' has already been declared

var i = 3;
var i = 5;
console.log(i); // 5