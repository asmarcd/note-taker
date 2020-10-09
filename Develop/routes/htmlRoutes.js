const path = require("path");

module.exports = function(app) {

app.get("../js/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../js/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../js/index.html"));
});

};