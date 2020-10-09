const fs = require("fs");

let savedNotes = fs.readFileSync("../db/bd.json", "utf8");
savedNotes = JSON.parse(savedNotes);
let noteTitle = savedNotes.title;
let noteText = savedNotes.text;

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(savedNotes);
    });

    const newNote = {
        title:noteTitle,
        text:noteText
    }

    app.post("/api/notes", function(req, res) {
        fs.writeFileSync (path.join(__dirname, "../db/db.json"), JSON.stringify(newNote, null, 2));
        res.json(newNote)
    })
}