# Client-side Storage

## Localstorage

Save something into localstorage. This creates the key (name) if it doesn't exist. This is called an upsert meaning
it will either update the existing value OR insert it as a new key/value pair it if doesn't exist.

```javascript
localStorage.set("nameOfThingYouWantToStore", 42);
```

Now we want to read the value. Again, we can try to get something by name that doesn't exist which will return `null`.

```javascript
const nameOfThingYouWantToStore = localStorage.get("nameOfThingYouWantToStore");
```

## Git add existing local project to github

Use your git@github.com:youraccount/yourproject.git URL instead

`git remote add github git@github.com:natescode/silicon-spec.git`

`git push github main`

## Create a new project locally

`git init`

`git add -A`

`git commit -m "initial commit"`
