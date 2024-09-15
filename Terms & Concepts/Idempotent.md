
Adjective describing an operation that can be repeated without having a different end state.


Adding 0 is idempotent
Deleting is idempotent because even if you try to delete something that doesn't exist, you get the same desired result, it doesn't exist.

```javascript
let a = 1;
a = 2;
a = 2; // idempotent. Can repeat with the same result.
```