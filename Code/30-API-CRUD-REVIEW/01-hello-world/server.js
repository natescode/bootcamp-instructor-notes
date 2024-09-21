import express from "express"
const app = express()
const port = 8080

app.get('/', function (request, response) {
    response.send('hello world')
})


app.listen(port, function () {
    console.log(`listening at http://localhost:${port}/`)
})