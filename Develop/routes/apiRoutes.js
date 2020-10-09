const fs = require("fs");

let readSavedNotes = fs.readFileSync("../../../db/db.json", "utf8");
savedNotes = JSON.parse(savedNotes);
let noteTitle = savedNotes.title;
let noteText = savedNotes.text;

let writeSavedNotes =  fs.writeFileSync(path.join(__dirname, "../../../db/db.json"));

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(readSavedNotes);
    });

    app.post("/api/notes", function (req, res) {
        JSON.stringify(writeSavedNotes, null, 2);
        return res.json(writeSavedNotes);
    });

    app.delete("/api/notes/:id", function (req, res) {
        savedNotes.forEach(note => {
            if (note.id === id) {
                // Delete the note. Not sure how to do this yet.
            }
        })
    })
}