const fs = require("fs");

let savedNotes = fs.readFileSync("../../../db/db.json", "utf8");
savedNotes = JSON.parse(savedNotes);
let noteTitle = savedNotes.title;
let noteText = savedNotes.text;

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(savedNotes);
    });

    app.post("/api/notes", function (req, res) {

        const newNote = {
            title: noteTitle,
            text: noteText
        }

        fs.writeFileSync(path.join(__dirname, "../public/assets/db/db.json"), JSON.stringify(newNote, null, 2));
        res.json(newNote)
    });

    app.delete("/api/notes/:id", function (req, res) {
        savedNotes.forEach(note => {
            if (note.id === id) {
                // Delete the note. Not sure how to do this yet.
            }
        })
    })
}