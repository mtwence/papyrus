# Papyrus

## Table of Contents

- [Description](#description)
- [Technologies](#technologies-used)
- [Deployed Link](#link)
- [Usage](#usage)
- [User Information](#user-information)
- [Credits](#credits)
- [License](#license)

## Description

A simply and easy to use web-based note taking app that allows you to create, save, and even delete notes.

## Technologies Used

- HTML
- CSS
- Bootstrap
- Javascript
- JSON
- Node.js
- Express.js
- Heroku

## Deployed Link

[Papyrus](https://papyrus-mtw.herokuapp.com/)

## Usage

![Demo of Papyrus](./public/assets/images/papyrus%20demo.gif)

### Code Snippets

Routing for the homepage, note taking page, and saved notes data.

```ruby
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

```

<br/>
Lines of code that adds functionality to save notes.
```ruby
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
```
<br/>
Lines of code that allow for deletion of saved notes. 
```ruby
app.delete('/api/notes/:id', (req, res) => {
    const table = notes.map((data) => {return data.id})
    .indexOf(req.params.id);
    notes.splice(table, 1);

    fs.writeFile("./db/db.json", JSON.stringify(newDb), err => {
        err ? console.error(err) : console.log('Hooray!')
    });
    res.json({});

});

```

## User Information

### **Michael Wence**

[LinkedIn](https://www.linkedin.com/in/michael-wence/) |
[GitHub](https://github.com/mtwence)

## Credits

UCB - Coding Bootcamp

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

© 2022 Michael Wence. All Rights Reserved.
```
