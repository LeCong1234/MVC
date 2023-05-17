const express = require('express');
const route = require('./routes');
const db = require('./config/db')
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

route(app);
db.connect();

app.listen(3000, () => {
    console.log('http://localhost:3000');
})