var array = ['john', 'dern', 'jack']

console.log(array);

//length of array 
console.log(array.length);

//adding to the end 
array[array.length] = 'ahmed';
console.log(array);
// ["john", "dern", "jack", "ahmed"]
array.push('mina');
console.log(array);
// ["john", "dern", "jack", "ahmed", "mina"]


//modifying data 
array[0] = 'men3em';
console.log(array);
// ["men3em", "dern", "jack", "ahmed", "mina"]

var newarr = ['abdo', 'ali', 'mostafa']

//add to beginning
newarr.unshift('saico');
console.log(newarr);
// ["saico", "abdo", "ali", "mostafa"]

//delete from the end 
newarr.pop();
console.log(newarr);
// ["saico", "abdo", "ali"]

//delete from beginning
newarr.shift();
console.log(newarr);
// ["abdo", "ali"]

//indexof
console.log(newarr.indexOf('ali'));

//trying to get index of element does not exist 
//it's helpful if we wanna check for element if exist in the array
console.log(newarr.indexOf('hamada'));
// -1

var whereIsPhoenix = newarr.indexOf('Phoenix') === -1 ? 'phoenix does not exist' :
    'phoenix is here!';

console.log(whereIsPhoenix);