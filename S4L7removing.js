const yargs = require('yargs');
const notes = require('./S4L7.js');

yargs.command({
    command : 'add',
    describe: "Adding a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);        
    }
})

yargs.command({
    command : 'remove',
    describe: "Removing a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);        
    }
})

yargs.parse();