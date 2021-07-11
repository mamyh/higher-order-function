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

//example 1 without higher order function 
var numbers = [1, 2, 3];
var newarr = [];

for (let i = 0; i < numbers.length; i++) {
    newarr[i] = numbers[i] * 2;
}
console.log(newarr);
//example with higher order function 
var results = numbers.map(function (itemnumb) {
    return itemnumb * 2;
})
console.log(results);

//example 2 without higher order 
var players = [
    {
        name: 'sakib',
        avg: 25.645,

    },
    {
        name: 'tamim',
        avg: 34.63,
    },
    {
        name: 'mushfiq',
        avg: 35.36,
    },
    {
        name: 'mahmud',
        avg: 35.43,
    }

];
var playerswiththirtyfour = [];
for (var i = 0; i < players.length; i++) {
    if (players[i].avg >= 35) {
        playerswiththirtyfour.push(players[i]);
    }
}
console.log(playerswiththirtyfour);
//example 2 with higher order function 
var playerswiththirtyfive = players.filter(function (player) {
    return player.avg >= 35;
});
console.log(playerswiththirtyfive);

//example 3 array.map() built in by sumit
const languages = ["javascript", "python", "php", "c"];
function mapSumit(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }
    return newArray;
}

const myArray = mapSumit(languages, function (language) {
    return language.length;
});
console.log(myArray);