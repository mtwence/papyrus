// global variables 
const express = require('express');
const app = express ();
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');
const id = require ('./helpers/uuid')
const PORT = process.env.PORT || 3001;

// setup for express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//landing html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
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


//   delete notes function 
app.delete('/api/notes/:id', (req, res) => {
    const table = notes.map((data) => {return data.id})
    .indexOf(req.params.id);
    notes.splice(table, 1);

    fs.writeFile("./db/db.json", JSON.stringify(newDb), err => {
        err ? console.error(err) : console.log('Hooray!') 
    });
    res.json({});
});

// server listening at this port 
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
