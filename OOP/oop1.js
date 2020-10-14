// a constructor function
function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.show = function() {
        console.log(`${this.x}${this.y}`);
    };
}

// to add a property in the prototype of a class 
// ClassName.prototype.PropertyName 
// this will be under __poto__ property of the particle object
Particle.prototype.hello = function() {
    console.log("Hello Function Excuted");
}

// this will be under __poto__ property of the particle object
Particle.prototype.callshow = function () {
    this.show();
}

var p = new Particle(15,39);
var p2 = new Particle(20,67);

// anything we add to the class prototype it will be under __proto__ property of the object
// and the __proto__ will have all methods and variables we have added to the prototype 
// plus the __proto__ property of the object of all JavaScript (Object Class)
