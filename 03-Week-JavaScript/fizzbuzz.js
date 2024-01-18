function fizzbuzz1(n) {
  for (let i = 1; i <= n; ++i) {
    if (n % 15 === 0) {
      console.log("fizzbuzz");
    } else if (n % 3 === 0) {
      console.log("fizz");
    } else if (n % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(n);
    }
  }
}

/*
I like this style of coding better because we only call `console.log` once. This is similar to the
`single return` style of coding.
*/
function fizzbuzz2(n) {
  for (let i = 1; i <= n; ++i) {
    let message = "";
    i % 5 === 0 ? (message += "fizz") : "";
    i % 3 === 0 ? (message += "buzz") : "";
    message = message === "" ? i : message;
    console.log(message);
  }
}

fizzbuzz2(19);

// Let's break this code into pieces and make it even more flexible (generic).
function fizzbuzzMessage(number) {
  let message = "";
  i % 5 === 0 ? (message += "fizz") : "";
  i % 3 === 0 ? (message += "buzz") : "";
  return message === "" ? i : message;
}

// All functions that we call in this function are passed in as parameters
// this is called Dependency Injection
// this gives us a lot for flexibility to test, and use the function the way we want
function fizzbuzz(from, to, getMessageFunc, output) {
  for (let i = from; i <= to; ++i) {
    let message = getMessageFunc;
    output(message);
  }
}

fizzbuzz(1, 19, fizzbuzzMessage, (s) => console.log(s));

// let's test this
let output = [];
fizzbuzz(1, 19, fizzbuzzMessage, (s) => output.push(s));
// instead of console.log we can make it push the output to our array
// this allows us to inspect it and
