import express from "express"
const app = express()
const port = 8080

// for parsing application/json from BODY in requests
app.use(express.json());

app.get('/', function (request, response) {
    response.send('hello world')
})


// GET, CREATE and DELETE friends

// store default friend data
let friends = [
    {
        id: 1,
        name: "Alice",
    },
    {
        id: 2,
        name: "Bob",
    },
    {
        id: 3,
        name: "Charlie",
    },
    {
        id: 4,
        name: "Danae",
    },
    {
        id: 5,
        name: "Eric"
    }
]

// Helper function to keep track of IDs
let id = friends.length
function getId() {
    id += 1
    return id
}

// GET localhost:8080/friends
// Get ALL friends
app.get('/friends', function (request, response) {
    // status 200 means all is good
    // sends friends object back as json text
    response.status(200).json(friends)
})

// GET localhost:8080/friends/1
// GET a single friend by id
app.get('/friend/:id', function (request, response) {
    const friend = friends.filter((friend) => friend.id === request.params.id)

    if (friend) {
        response.status(200).json(friend)
    } else {
        response.status(404).send(`friend with id ${request.params.id} not found`)
    }
})

// CREATE a new friend, passed in the body of the request
app.post('/friend', function (request, response) {
    console.log(request.body)
    // make the id one more than last time
    const id = getId()
    const newFriend = {
        id: id,
        name: request.body.name
    }
    friends.push(newFriend)

    response.status(200).send('ok')
})

app.delete('/friend/:id', function (request, response) {
    if (!id) {
        response.status(400).send('bad request. No id given')
    }
    // filter out the friend with that id
    // update friends to not have that friend
    friends = friends.filter((friend) => friend.id != request.params.id)
    response.status(200).send('ok')
})

// END FRIEND ROUTES

app.listen(port, function () {
    console.log(`listening at http://localhost:${port}/`)
})