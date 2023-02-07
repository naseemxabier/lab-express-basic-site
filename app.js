const express = require("express");
const app = express();

app.use(express.static("public"));

app.get('/home', (request, response) => {

    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response) => {

    response.sendFile(__dirname + '/views/about.html')
})
app.get('/work', (request, response) => {

    response.sendFile(__dirname + '/views/work.html')
})
app.get('/photos', (request, response) => {

    response.sendFile(__dirname + '/views/photos.html')
})


app.listen(5500, () => {
    console.log("hola")
})