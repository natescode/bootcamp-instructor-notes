---
tags:
  - backend
  - frontend
  - tools
  - languages
---
TypeScript as a superset of JavaScript. This means that ALL JavaScript is valid TypeScript BUT not all TypeScript is valid JavaScript. TypeScript `extends` JavaScript to add `interface`, `type` and type annotations to JavaScript. 

## Why TypeScript?

Statically typed languages like C, C++, C#, Java, Go, OCaml, Groovy, Rust, Zig etc.

Statically typed means the type does not change for a variable name. Variables just *hold* values. The type of the variable is the type of the data it holds. In Dynamically Typed languages like JavaScript, Ruby, Lua, Python etc. Variables can hold any data of any type at any time.

```typescript
let currentTemperature = 72; // is a number.
currentTemperature = "70"; // is a string. It's TYPE changed!
```

But if we do exactly the same code in `typescript`

```typescript
let currentTemperature = 72; // is a number.
currentTemperature = "70"; // ERROR: currentTemparature is a number and cannot hold a string
```

We would get an error explaining that when we declared `let` the variable `currentTemperature` that it was holding a `number` so TypeScript assigned it to only hold numbers. Then we tried to change it to hold strings but it can't! 

This may seem silly at first but then we realize why types are useful! [[Types]] define a group of values and the operations (functions) we can perform on those values.

```typescript
const a = "a";
const b = "b";
a - b; // this makes no sense. `-` is for numbers not strings.
```