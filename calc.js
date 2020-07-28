exports.add = function (a, b) {
    return a+b;
}; 

exports.subtract = function (a, b) {
    return a-b;
}; 

exports.multiply = function (a, b) {
    return a*b;
}; 



var pet = 'cat';
function myMethod() {
     var pet = 'dog';
     console.log(pet);
 }

myMethod();
console.log(pet);