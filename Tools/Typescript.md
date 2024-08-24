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


##  Interfaces, and Types and Errors oh my!

Let's go over the fundamentals of TypeScript. What is existing is that once you learn TypeScript, many other languages will be easier to learn.  Languages such as C++, C#, Java, Go, Swift, Rust, Zig and more!


### Interface

I have defined what an [[Interface]] is  but I haven't shown the code for it. An interface is a contract that an object has a certain set of properties and methods. This allows our code to be more generic aka abstract; it only caring about the details that matter. 

Let's make a Car class that creates a Car object. 

```typescript
class car {
	make: string,
	model: string,
	year: number,
	// interface methods
	isRunning: boolean,
	fuelPercentage: number,
	speed: number,
	start(): boolean,
	stop(): boolean,
	left(): void,
	right(): void, 
	accelerate(speed:number):number,
	reverse(): void,
}
```

Lawnmower

```typescript
class lawnmower {
	fuelType: string,
	mixGas: boolean,
	hours: number,
	// interface methods
	isRunning: boolean,
	fuelPercentage: number,
	speed: number,
	start(): boolean,
	stop(): boolean,
	left(): void,
	right(): void, 
	accelerate(speed:number):number,
	reverse(): void,
}
```

Both Car and Lawnmower are different objects. They do SHARE some properties though. Let's take those similarities and put them into an interface!

```typescript
interface IDrivable {
	isRunning: boolean,
	fuelPercentage: number,
	speed: number,
	start(): boolean,
	stop(): boolean,
	left(): void,
	right(): void, 
	accelerate(speed:number):number,
	reverse(): void,
}
```

I used the C# naming convention because it highlights that interfaces tell you what an object `can do` or `has a` relationship while classes define a `is a `. `class lawnmower` because it **IS A** lawnmower versus `interafce IDriveable` doesn't say *what* the object is BUT what it can be done with it, it can be driven.

Let's define another interface that these classes can implement!

```typescript
interface ISellable {
	price:number
}
```


## Generics 

Generics are just placeholders for Types we don't know. For example, we may have a function that sorts an array. That array could hold any type. It could be an array of numbers `number[]` or an array of cars `car[]` or even an array of our `ISellable` interface `ISellable[]`. We can write arrays like this as well `Array<Type>` where `Type` is the type such as `Array[number]`. 

```typescript
function sellItems<T extends ISellable>(items:T[]): number | null {
	let total = null;
	for(let item of items){
		total += item.price
	}
	return total
}
```

The `<>` tells use the type parameters. Yeah they work a lot like function parameters! We don't know the types so we'll wait. We could have `Map<T,K>` or is this case we have `<T extends ISellable>` which means our type goes into parameter `T` and it should implement the interface `ISellable.`