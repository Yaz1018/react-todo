// function add(a, b) {
//     return a + b;
// };
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Gregg', 'Nicole'];
//
// var groupB = ['Veronica', 'Chrissy'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Garon', 33];
var person2 = ['Veronica', 33]

function Greeter(name, age) {
    console.log('hi ' + name + ' you are ' + age);
}

Greeter(...person);

Greeter(...person2);

var names = ['gregg', 'nicole'];

var final = ['Garon', ...names];

final.forEach(function(name) {
    console.log('Hi ' + name);
});