const fs = require('fs');
const chalk = require('chalk');

// Adding a note to json
const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicate = notes.find(note => note.title === title);

    if (!duplicate) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added'));

    } else {
        console.log(chalk.red.inverse("this title is already exist"));
    }

}

// Removing a note from json
const removeNote = title => {
    var notes = loadNotes();

    var AfterDeleting = notes.filter(note => note.title !== title);

    if (AfterDeleting.length === notes.length) {
        console.log(chalk.red.inverse('No notes found!'));
    } else {
        saveNotes(AfterDeleting);
        console.log(chalk.green.inverse('Note has been deleted.'));
    }

}

// listing notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your notes ..."));
    notes.forEach(note => {
        console.log(note.title);
    })
}

// Read a note by title 
const readNote = title => {
    const notes = loadNotes();
    const noteObj = notes.find(note => note.title === title);
    if (noteObj) {
        const title = chalk.inverse(noteObj.title);
        const body = noteObj.body;
        console.log(`${title}\n${body}`);
    } else {
        console.log(chalk.red.inverse("No Notes Found!"));
    }
}

// saving (writing) notes to file
const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));

// retreiving notes 
const loadNotes = () => {
    try {
        const dataJson = fs.readFileSync('notes.json');
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}