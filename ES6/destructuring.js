var [name, age] = ['john', 19];
console.log(name, age);


var obj = {
    firstName: 'john',
    lastName: 'kelly'
}

// var { firstName, lastName } = obj;
// console.log(firstName);
// console.log(lastName);

var { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);