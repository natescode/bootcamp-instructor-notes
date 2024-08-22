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