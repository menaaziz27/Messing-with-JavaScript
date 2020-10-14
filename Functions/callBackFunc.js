// function as a parameter to another function

var years = [1999, 1992, 1997, 2004, 1975];

function arrCalc(arr, callBackFunction) {

    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(callBackFunction(arr[i]));
    }

    return arrRes;
}

function calcAge(element) {
    return 2020 - element;
}

function isAdult(element) {
    return element >= 18;
}

function maxHeartRate(element) {

    if(element >= 18 && element <= 81) {
        return Math.round(206.9 - (.67 * element));
    } else {
        return -1;
    }   
}

var ages = arrCalc(years, calcAge);
console.log(ages);

var adult = arrCalc(ages, isAdult);
console.log(adult);

var rates = arrCalc(ages, maxHeartRate);
console.log(rates);