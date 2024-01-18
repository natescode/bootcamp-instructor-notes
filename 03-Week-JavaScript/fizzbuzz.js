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

function fizzbuzz2(n) {
  for (let i = 1; i <= n; ++i) {
    let message = i;
    let fizz = i % 5 === 0 ? "fizz" : "";
    let buzz = i % 3 === 0 ? "buzz" : "";
    // let message = fizz !== "" || buzz !== "" ? fizz + buzz : i;
    console.log(message);
  }
}

fizzbuzz2(19);
