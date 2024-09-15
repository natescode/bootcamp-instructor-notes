React ! 

We'll be doing 5 Weeks with React. This week is React, Next week is React + Typescript and the following week is React + Node / Express. 
THEN 2 weeks for Project 2 ! That is a LOT of React. 

Now is the time to go back to your JavaScript fundamentals because React is 90% just JavaScript. 

## The Problem

What problem does React solve? Remember doing `document.createElement` manually? Manually updating the DOM (HTML) every time an event happens or data changes quickly becomes messy! React allows developers to easily create Reactive (hence the name) UIs without worrying about the *how*. React is declarative not imperative.  

## Library vs Framework

React is a view library. Vue, and Angular are Frameworks. A library is generally more lightweight and has a specific collection of functions to solve ONE problem. A framework, generally is a collection of multiple libraries that has a strong opinionated structure that wraps all your code. Your code goes into a framework while a your code calls a library.



## Function Become Tags

React uses JSX which is 99% like HTML that gets translated into JavaScript.

```jsx
// Custom components start with an uppcase letter. 
// Regular HTML starts with lowercase.
<MyCustomComponent thing1={"hi"} />
// exactly the same as (yes this actually works)
MyCustomComponent({thing1:"h1"})
```


## Hello World

```jsx
function Hello(){
	// other code goes here
	return (
		<h1>Hello React!</h1>
	)
}
```

Pretty cool right?! React has it's own library functions but the base is just regular JavaScript functions and HTML-like. Like I said, JSX is 99% HTML. What is the 1%?

### JSX !== HTML

JSX exists inside JavaScript so any HTML keywords that match JavaScript keywords have been renamed.

Here are the main differences.

| HTML  | JSX       |
| ----- | --------- |
| class | className |
| for   | HTMLFor   |
For example the `class` attribute becomes `className` and the `for` attribute becomes `HTMLFor`.

HTML
 
```html
<label for="foo"></label>
<input class="center" type="text" id="foo"></input>

```

JSX

```JSX
<label HTMLFor="foo"></label>
<input className="center" type="text" id="foo"></input>
```

## Templating

Let's add data to our HTML with JavaScript Variables


```jsx
function Hello(){
	// other code goes here
	const message = "Hello React!"
	return (
		// everything between {} is replaced with the value of the 
		// JavaScript expression i.e. {1 + 2} would render 3
		<h1>{message}</h1>
	)
}
```


## State

React has a unique approach. I won't explain *why* because that takes more experience to understand. 

React is immutable during render. This means that variable DO NOT CHANGE inside your component. We'll use the `useState` function to save data between renders. Your component function `count` will be called multiple times, each time we click the button. 


```jsx
import { useState } from 'react'

function count(){

	// count and setCount can be named ANYTHING.
	// [currentValue, functionToSetValueForNextTime] = useState(InitialValue)
	const [count, setCount] = useState(0)

	// function 
	const incrementCount = ()=>{
		setCount(count + 1) // increment the count NEXT time count() is called
		console.log(count) // log the count (again it hasn't changed)
	};

	return (
		<button id="count" onClick={incrementCount}>Count: {count}</button>
	)
}
```

You'll notice that the count that is logged is always 1 behind the actual count on the button.

### Declarative vs Imperative

Can you guess what click on the count button will do now?

```jsx
import { useState } from 'react'

function count(){

	const [count, setCount] = useState(0)

	const incrementCount = ()=>{
		setCount(count + 1) // increment the count
		setCount(count + 1) 
		setCount(count + 1) 
		console.log(count) // log the count
	};

	return (
		<button id="count" onClick={incrementCount}>Count: {count}</button>
	)
}
```

Nope. It doesn't count by 3's. . . WHY?! Because React is declarative. We aren't immediately changing the count. Imperative code means we control every detail of HOW it works. Declarative code means we say WHAT we want the result to be; React figures out the how. 

Look at this code.

```jsx
	setCount(count + 1) // next time, make the count 1 more than it currently is
	setCount(count + 1) // next time, make the count 1 more than it currently is
	setCount(count + 1) // next time, make the count 1 more than it currently is
```

The above code has roughly the same semantics (meaning / result) as the equivalent imperative code

```jsx
	const newCount = count + 1 // effectively what setCount() means
	count = newCount;
	count = newCount;
	count = newCount;
```

We're saying the same command over and over again. Nothing is going to change. This is called [[idempotent]]. This makes code easier to think about because we don't have to worry about the order of operations or follow the state changes.

## UseEffect

React has another `hook` or library function that allows use to do basically anything that requires the outside world. We'll use `useEffect` to fix our console.log to actually output the current count.


```jsx
import { useState, useEffect } from 'react'

function count(){
	const [count, setCount] = useState(0)
	
	useEffect(()=>{
		console.log(count) // log the count when the count variable changes
	}, [count])
	
	const incrementCount = ()=>{
		setCount(count + 1) // increment the count
	};	
	return (
		<button id="count" onClick={incrementCount}>Count: {count}</button>
	)
}
```

Now the count will be correctly logged to the console. 

## Rules of Hooks

Hooks have same rule that you must follow in order to avoid issues.

1. Only call hooks inside a function component
2. Do not call hooks inside conditions `if` or loop `for`
3. Do not call hooks in event handlers
4. Do not call hooks in function that are parameters (passed to) `useMemo`,`useReducer` or `useEffect`.

You can read more about it in the [Official React Docs](https://react.dev/warnings/invalid-hook-call-warning).