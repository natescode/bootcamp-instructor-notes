---
tags:
  - asynchronous
  - backend
  - frontend
  - terms
---
`await` is just another syntax / method for using [[Promises]] in Javascript. 

Here is an example code snippet.

```typescript
async function getUsers(){
	const userResponse = await UsersQuery();
	const users = await userResponse.json();
	return users;
}
```

You'll notice that we have to add `async` before the `function` keyword. For lambda functions we'll add `async` before the `()` i.e. `const getUsers = async () => ...`.

Instead of doing `UsersQuery().then();` we say `await` which automatically waits for the function to complete. This keeps the code more flat and avoid [Then() Hell](https://stackoverflow.com/questions/58381551/how-to-avoid-then-hell-in-javascript). 