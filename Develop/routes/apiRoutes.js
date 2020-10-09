const fs = require("fs");
const path = require("path");

let savedNotes = fs.readFileSync("../../../db/db.json", "utf8");
savedNotes = JSON.parse(savedNotes);

let noteTitle = savedNotes.title;
let noteText = savedNotes.text;


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(savedNotes);
    });

    app.post("/api/notes", function (req, res) {
        
        for (let i = 0; i < savedNotes.length; i++){
          savedNotes[i].uniqueId = i+1;
          req.body.uniqueId = i+2;
        };
        

        console.log(savedNotes);

        savedNotes.push(req.body);

        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotes, null, 2));

        res.send("Note added");

    });

    // app.delete("/api/notes/:id", function (req, res) {
    //     savedNotes.forEach(note => {
    //         if (note.id === id) {
    //             // Delete the note. Not sure how to do this yet.
    //         }
    //     })
    // })
}