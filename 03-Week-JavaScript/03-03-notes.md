# Objects, I Object!

### Fizz buzz

1. Count from 1 to 30
2. If the number is a factor of 3, print "fizz"
3. If the number is a factor of 5, print "buzz"
4. If the number is a factor of 3 and 5 (or 15), print "fizzbuzz"
5. If the number is not a factor of 3 or 5, print the number

Calculate the factor?

1. The `%` remainder / modulo operator. `x % 3 === 0`

   if (x % 3 === 0){
   // x is a factor of 3
   }

My custom method

```javascript
Number.prototype.isFactorOf = function (f) {
  return this % f === 0;
};

// use like this
let x = 15;
x.isFactorOf(3); // true
x.isFactorOf(4); // false
```

### Sum Number from 1 to N

Iterative Solution: O(n)

```javascript
function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; ++n) {
    sum += i;
  }
  return sum;
}
```

Recursive Solution: O(n)

```javascript
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
```

Formula Solution: O(1)

```javascript
function sum(n) {
  return (0.5 * n) ^ (2 + 0.5 * n);
}
```

1. Fizzbuzz
1. Sum all numbers from 1 to N
1. Find the factors of a give number
1. Convert between Celsius and Fahrenheit
1. Reverse a string
   a. with Javascript library methods
   b. without Javaascript library methods
1. Calculate the average of a list of numbers
1. 20 Questions game
1. Calculate the difference between two dates
