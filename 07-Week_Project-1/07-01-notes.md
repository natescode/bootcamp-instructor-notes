# Project 1: Front-End

## API key Mock API data

We only have a front-end which has 2 major drawbacks for our project.

1. API keys exposed which is a security issue.
1. Rate limiters which prevents testing or demoing.

## Solutions

1. [POSTMAN mock server](https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) don't have low rate limits and are safer.
2. [FETCH](https://developer.mozilla.org/en-US/docs/Web/API/fetch) with `force-cache` option.

```javascript
// URL for your API endpoint
const apiUrl = "https://example.com/api/data";

// Create a Request object with cache set to "force-cache"
const request = new Request(apiUrl, {
  method: "GET",
  cache: "force-cache",
});

// Make the Fetch API call
fetch(request)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error("Fetch error:", error);
  });
```

## **Postman** to the rescue

We can actually MOCK our APIs with Postman! Postman will even host a server that returns our fake data.

// TODO: create a tutorial guide with pictures. Possibly a YouTube guide as well.

### Steps

1. Create a collection
2. `...` and `Mock whole collection`
3. Set the collection variable to the URL
4. For each API call
   a) `...` then `add example`.
   b) You can add an example call with params and response body.

## Project Ideas

- Pickup game app
- Card Game
- Recipe Planner
-

## APIs

Again, just get the data to work once and mock it. I'll deal with the graders :-).
