//Proof function is object in js
function hello() {
    console.log('hello world');
}
hello();

hello.language = "Bengali";
console.log(hello.language);
//function is special type of object
var a = function just() {
    console.log('just a function ');
}

console.dir(a);

var str = {
    name: 'mamun',
}
console.dir(str);

//passed funciton as arguments 
//return function 
//one or both above condition should be fulfill to be a higher order function 
function world() {
    return function () {
        console.log('hellow world');
    }
}

world()();