var arr = [1,2,3,4,5];

// adding customized double function to the Array class prototype
Array.prototype.double = function() {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}

// arr.double();
// output: [1, 4, 9, 16, 25]
