# Review of EXPRESS and Server APIs

## 01 Hello World

To Start

```bash
npm install
node server.js
```


Go to `localhost:8080` in your browser. 


## 02 CRUD

This has the most basic CRUD example. 

To Start 

```bash
npm install
node server.js
```

 Using POSTMAN or INSOMNIA, you can send a GET, POST, and DELETE requests to `localhost:8080/friend`

 You can also send the requests from VS Code. 
    1. Install [Rest Client Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
    1. Open the [crud.http file](./02-CRUD/crud.http). You'll be able to click `send request` above each request.

 Look in the `postman` folder and import the `friends.postman_collection.json` file into your POSTMAN to make requests

 ### Make Request

 1. Run `Get All Friends`. 5 friends are returned.
 1. Run `Create new friend`. New friend `Nathan` with id 6 was created.
 1. Run `Get all Friends`. See the new friend added.
 1. Run `Delete friend by id`. Friend `Charlie` removed.
 1. Run `Get all friends`. See 5 friends with `Nathan` bun no `Charlie`.


