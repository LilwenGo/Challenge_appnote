const fs = require('fs/promises');

function getNotes() {

}

function addNote() {

}

function deleteNote() {

}

function writeLog(message) {
    let date = new Date();
    fs.appendFile(
      "access.log",
      `[${date.toLocaleDateString()}| ${date.toTimeString()}] ${message}\n`,
      (err) => {
        if (err) throw err;
        console.log("Saved!");
      }
    );
}

module.exports = {getNotes, addNote, deleteNote, writeLog};