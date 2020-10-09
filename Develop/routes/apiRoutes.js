const fs = require("fs");
const path = require("path");

// This sets a variable for our saved notes array, allowing us to access and edit it throughout the rest of the file:
let savedNotes = fs.readFileSync("../../../db/db.json", "utf8");
savedNotes = JSON.parse(savedNotes);

module.exports = function (app) {
    // This reads the db.json file, allowing its contents to be displayed on the page:
    app.get("/api/notes", function (req, res) {
        res.json(savedNotes);
    });

    // This allows the user to write new notes, assigns them a unique id, and saves them to the array in the db.json file:
    app.post("/api/notes", function (req, res) {

        for (let i = 0; i < savedNotes.length; i++) {
            savedNotes[i].id = i + 1;
            req.body.id = i + 2;
        };

        savedNotes.push(req.body);

        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotes, null, 2));

        res.send("Note added");

    });

    // This allows users to delete notes by searching through each object in the array in db.json, removing the clicked on note, and rewriting the file without that note object.
    app.delete("/api/notes/:id", function (req, res) {
        savedNotes.forEach(note => {
            if (note.id == req.params.id) {
                savedNotes.splice(savedNotes.indexOf(note), 1);
            }
        })
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotes, null, 2));
        res.send("Note Deleted")
    })
}