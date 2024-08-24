---
tags:
  - week09
  - vite
---
- fetch
- decontruct params
- async await
- HTTP and CRUD
- network tab (dev tools)
- express setup
- HTML api routes
- path and query params
- insomnia / postman (API client testing)
- File System (fake DB)
- Try Catch

I will link other notes about [[HTTP]] and [[API]] for further reading.

## Promises

As always, check [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)for more information.

A promise is just a value that is inside an object. Promises are like money checks. If Alice writes Bob a check for $100, that check is NOT actually money, yet. That check is a *promise* of money. Bob can take that check to the bank and the check will appear in his account as 1 of three states: Pending, Deposited or Bounced. Promises are the same. A promise has 1 of 3 states: pending, fulfilled or rejected.

In JavaScript, and Node, a Promise is just an Object with a `.then` method. That method takes a function with a single parameter which is the resulting value

## Async Await

I've already covered [[Async & Await]] but I'll go over more of *how* we'll use it here.

## Try / Catch / Finally

These are blocks that wrap code that may `throw` an exception. I always think of this as if the function explodes and we contain or *catch* the shrapnel. 

```typescript
try {
   // this code may fail
   const response = await getUsers();
}
catch(error){
	console.error(error)
	res.status(500).send('server error')
}
finally {
	// clean up database connections etc.
}
```


## Full-Stack Vite + Express

Let's look at the anatomy of a Full-Stack JavaScript application. 

```shell
/client
/server
package.json
```
Remember, `package.json` means the folder is a project folder. Now that we have two projects in one application: client and server then we'll want to start both of them and install both their node_modules. 

### Root package.json

Use the [concurrently](https://www.npmjs.com/package/concurrently) to run both the client and server start scripts at the same time. Remember the `scripts` in the `package.json` are just terminal commands run for you.

## Vite

Vite creates the plumbing and foundation for our frontend (client) projects. We start it with 

`npm run dev` which runs `vite`.

## Express

Express is a built-in server-side web framework in NodeJS that allows use to define HTTP routes and send back responses.


## Modular Routing

We'll cover how to organize our HTTP routes better. We'll organize them based on the file structure. This is how frameworks like [NextJS](https://nextjs.org/).


## Middleware

What is middleware? 

> "Middleware is software / code that can be added to existing software".

Here is a REALLY simple example. Let's say our whole "framework" is just a function that takes an array of numbers and sums them up.

```typescript
// pretend this function is our FRAMEWORK (like ExpressJS)
function Sum(numbers:number[])
	return numbers.reduce((acc,curr)=> acc + curr);
}
```

Now let's create "middleware" or our own code to add functionality to this software. I think it would be nice to log when we are done with a sum. How do we ADD code to someone else's code that we cannot edit? 

```typescript
function withLog(func, args){

	// we add our logging
	console.log(`calling function ${func}
	with arguments ${args} `)

	// we call the original function
	try{
		func(args)
	}
	catch(error){
		console.error(error)
	}

	console.log(`function ${func} executed successfully`)
}
```

## Deploying to Render

We will be using the [Render](https://render.com/) service to host and run our websites!

Render settings

**Build** Command `npm install && npm run build`  
**Start** command `npm run server`



