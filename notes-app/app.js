const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')


// Create the add command

yargs.command({
	command: 'add', 
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'

		},
		body: {
			describe: "Note body",
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		notes.addNotes(argv.title, argv.body)
	}
})

// Create the remove command 
yargs.command({
	command: 'remove', 
	describe: 'Remove a  note', 
	title: {
		describe: 'Note title',
		demandOption: true,
		type: 'string'

	},
	handler: (argv) => {
		notes.removeNotes(argv.title)
		
	}
})

// Create the list command
yargs.command({
	command: 'list', 
	describe: 'List all the notes',
	
	handler: () => {
		notes.listNotes()
	}
})

// Create the read command
yargs.command({
	command: 'read', 
	describe: 'Read a particular note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		
		notes.readNote(argv.title)
	}
})





// add read list remove 
yargs.parse()
// console.log(yargs.argv)













// const add = require('./util.js')
// console.log(add(45,46))