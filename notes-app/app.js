const yargs = require('yargs');
const notes = require('./notes');

// Create add note command
yargs.command({
    command: "add",
    describe: "adding a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "the note content",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
});

// Remove a note
yargs.command({
    command: "remove",
    describe: "remove a note",
    builder: {
        title: {
            describe: 'title name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
});

// listing all notes
yargs.command({
    command: "list",
    describe: "Listing all notes",
    handler: () => notes.listNotes()
});

// read a note
yargs.command({
    command: "read",
    describe: "read a specific note",
    builder: {
        title: {
            describe: 'reading a note by title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
});

yargs.parse();