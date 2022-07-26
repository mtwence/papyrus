// global variables 
const express = require('express');
const app = express ();
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');
const id = require ('helper/uuid.js')
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//landing html 
app.get('/', (req, res) => {
    res.sendFile(__dirname, "./public/index.html");
});

// notes html 
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});

// notes json object 
app.get("/api/notes", (req, res) => {
    res.json(notes)
});

// post newly created note to server 

app.post("/api/notes", (req, res) => {
    const { title, text} = req.body;
    const newNote = {
        title: title,
        text: text,
        id: id(),
    };    
    notes.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) =>
    err ? console.error(err) : console.log("Hooray!"));
    res.send(notes);
});