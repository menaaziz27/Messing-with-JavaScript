// ES5
// function isFullAge5() {
//     // console.log(arguments);
//     var arrAges = Array.prototype.slice.call(arguments);
//     console.log(arrAges);
//     arrAges.forEach(function (curr) {
//         console.log((2020 - curr) >= 18);
//     })
// }

// var ages = [];
// isFullAge5(1990, 1990, 1985);
// isFullAge5(1990, 1990, 1985, 2000, 2004);

//ES6

// function isFullAge6(...years) {
// console.log(arguments);
//     years.forEach(function (curr) {
//         console.log((2020 - curr) >= 18);
//     })
// }

// isFullAge6(2009, 1990, 2003, 2000, 2004);
function isFullAge6(limit) {
    // console.log(arguments);
    var arrAges = Array.prototype.slice.call(arguments, 1);
    arrAges.forEach(function (curr) {
        console.log((2020 - curr) >= limit);
    })
}

// isFullAge6(18, 2009, 1990, 2003, 2000, 2004);


function isFullAge6(limit, ...years) {
    console.log(arguments);
    years.forEach(function (curr) {
        console.log((2020 - curr) >= limit);
    })
}

isFullAge6(18, 2009, 1990, 2003, 2000, 2004);