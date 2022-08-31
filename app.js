const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    console.log("homeeeee");
    res.send("<h1>hi</h1>")
})

app.listen(3000, () => {
    console.log("Listening!");
})