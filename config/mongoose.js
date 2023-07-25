const mongoose = require('mongoose');

// connect to databases
mongoose.connect('mongodb+srv://ehteahmad:0gvXTN5yq8HrSluS@cluster0.h5s6ofc.mongodb.net/Habit_Tracker');

// acquire the connection
const db = mongoose.connection;

// Error 
db.once('error',console.error.bind(console, 'Error in connection to Database'));

// up and running then print the message
db.once('open', ()=> {
    console.log('Successfully connected to the Database');
})



