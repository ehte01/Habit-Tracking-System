const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');

// added a parser, it signifies the middleware
app.use(express.urlencoded()); 

// for getting static files
app.use(express.static("assets"));

// seting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Layouts
app.use(expressLayout);

// extract style and script from sub pages into layout 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/', require('./routes'));

app.listen(port , (err) => {
    if (err) {
        console.error('Error in running the server',err);
    }

    console.log(`Server is running on port: ${port}`);
})