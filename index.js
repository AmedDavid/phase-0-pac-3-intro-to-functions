// Follow along with the examples here
function doNothing() {}

function sayHello() {
  console.log('Hello!');
}

function sayHelloToGuadalupe() {
  console.log('Hello, Guadalupe!');
}

function sayHelloToLiz() {
    console.log('Hello, Liz!');
}

function sayHelloToSamip() {
    console.log('Hello, Samip!');
}

// doNothing();
// sayHello();
// sayHelloToGuadalupe();
// sayHelloToLiz();
// sayHelloToSamip();

function doSomething(thing) {
  console.log(thing);
}

// doSomething('anything');

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

// sayHelloTo('Guadalupe');
// sayHelloTo('Liz');
// sayHelloTo('R2-D2')
// sayHelloTo(1);

// function say(greeting, firstName) {
//     console.log('firstName is:', firstName);
//     console.log('greeting is:', greeting);
//   console.log(`${greeting}, ${firstName}!`);
// }

function say(greeting, firstName) {
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
}

console.log(say('Howdy', 'partner'));

// say('Hello', 'Sofia');

function add(x, y) {
  return x + y;
}

// console.log(add(1,2));