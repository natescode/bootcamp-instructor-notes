# Loops and more

## For loop

`for` is the keyword that says we want to repeatedly do some actions (a code block).

`()` contains the statements that define the iteration process.

`let i = 0;` declare a variable and its starting value.

`i < 10` _condition_ that is checked after each iteration (after we run the given code block). When the
condition is false, we stop.

`++i` this is the _update_ statement that updates our counter so eventualy our condition is false and we stop.

```javascript
for (let i = 0; i < 10; ++i) {
  console.log(i);
}
```

We can count backwards of course too.

```javascript
for (let i = 10; i > 0; ++i) {
  console.log(i);
}
```

## For..of

Some data-structures (think `object`) are iterable, meaning we have a way to travel across them. The alphabet is iterable, there is an order to going
over the data `A,B,C,D...`

So let's log each item in an array with a regular `for` loop.

```javascript
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

for (let i = 0; i < 10; ++i) {
  let letter = alphabet[i]
  console.log(letter);
}
```

NOW, many times we don't care about `i` or the `index`. We just want to _do_ something to each _item_ in a _collection_. We can use 
a `for...of` loop

```javascript
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

for (let letter of alphabet) {
  console.log(letter);
}
```

You can imagine that `of` is basically doing `alphabet[i]` for us.

## .forEach

Collections, arrays in this case, that are iterable have a method called `forEach` that we can also use. It even gives
us the `index` if we want/need it.

`Array.prototype.forEach` takes a function to run on each item in our array. 
It will give that function the following three parameters: `element`,`index` and `array`.

```javascript
// 'element' is called 'letter' here. We can call our parameters whatever we want. 
// Javascript only cares about the order
alphabet.forEach(function(letter,index,alphabetArray){
    console.log(letter)
})
```