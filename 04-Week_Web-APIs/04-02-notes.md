# JS events

## Forms

Let's define a form. We add some validation to makesure we include the email and password.
HTML has input types for email and password. `type="email"` requires and `@` somewhere and password
will show `***` for our password for security.

```html
<form id="myForm">
  <input type="email" placeholder="email" required />
  <input type="password" minlength="8" required />
  <button type="submit">Submit</button>
</form>
```

let's save all the form values with their give names to localStorage.

```javascript
const form = document.querySelector("#myForm");
form.addEventListener("submit", function (event) {
  let formData = {
    email: form.email.value,
    password: form.password.value,
  };
  localStorage.set("formData", JSON.stringify(formData));
});
```
