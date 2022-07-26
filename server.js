// global variables 
const express = require('express');
const app = express ();
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');
const randomId = require ('helper/uuid.js')
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//landing page 
app.get('/', (req, res) => {
    res.sendFile(__dirname, "./public/index.html");
});

