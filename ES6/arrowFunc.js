var birthOfYear = [1990, 1999, 1989, 1975];

// ES5
var ages = birthOfYear.map(function (curr) {
    return 2020 - curr;
});
console.log(ages);

// Es6

ages = birthOfYear.map(el => 2020 - el)
console.log(ages);

ages = birthOfYear.map((el, index) => {
    now = new Date();
    year = now.getFullYear();
    return `element at index ${index + 1} is ${year - el} years now`;
});

console.log(ages);