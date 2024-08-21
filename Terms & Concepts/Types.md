A type is a group of values and their related functions that can be used with them.

```typescript
type boolean = true | false
```
A `boolean`is a group that holds only two values `true` and `false`. `|` just means `or`. 

We recreated the `boolean` type. Let's make a variable of that type.
Now we want to be able to convert `true` or `false` to a string. 

```typescript
const isBald: boolean = true; // no hair here
isBald.toString(); // can we convert this to a string? YES!
```