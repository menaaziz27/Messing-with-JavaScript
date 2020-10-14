// difference between primitives and objects

// primitives

var a = 22;
var b = a;
a = 45;
console.log(a); // 45
console.log(b); // 22

// objects

var obj1 = {
    name: "john",
    age: 15
}

var obj2 = obj1;  // holding a reference to obj1
obj2.name = 'medhat';
console.log(obj1.name); // medhat
console.log(obj2.name); // medhat
// because they are pointing to the same object 


// functions are the same 

var age = 27;
var guy = {
    name : 'hamada',
    age: 12
}

function changeProperties(age, obj) {

    age = 19;  
    // here we're creating a new variable in the new excution context 
    // called 'age' and will disappear after the function execution
    obj.name = 'Caitlin';
}

changeProperties(age, guy);

console.log(age);  // will remain 27 because it's primitive
console.log(guy.name);  // Caitlin
