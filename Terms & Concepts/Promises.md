---
tags:
  - backend
  - frontend
  - terms
  - asynchronous
---
A promise is data wrapped in an object.

```typescript
{
  value: "Hello"
}
```

But that object also has a `then()` method for when it is finished loading.

```typescript
{
  value: null,
  then(callback){
     callback(this.value)
  }
}
```

Once we get the `value` the `then` method is called.

```typescript
function getUsers(){
   UsersQuery()
	   .then(function(response){
		   return response.json();
	   })
	   .then(function(data){
		   return data;
	   });
}
```