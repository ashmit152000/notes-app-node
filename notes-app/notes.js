const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(notes){
    return notes
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((notes) => notes.title === title)

    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title
    // })

    console.log(duplicateNotes)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title, 
            body: body
        })
    } else {
        console.log('The title is already added')
    }
    
    saveNotes(notes)
}


const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log("Title: " + note.title + " \t Body: " + note.body)
    });
}


const readNote = (title) => {
    const notes = loadNotes()
    try{
        const searchedNote = notes.filter((note) => note.title === title)
    console.log(chalk.inverse.green("Title: " + searchedNote[0].title + "\t Body: " + searchedNote[0].body))
    }catch(e){
        console.log(chalk.inverse.red('No such note present'))
    }
    

}

const saveNotes = (notes) => {
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataString)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

    
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const objectIndex = notes.findIndex((note) => note.title === title )
    // const objectIndex = notes.findIndex((note) => {
    //     return note.title === title
    // })
    console.log(objectIndex)
    if(objectIndex !== -1  ){
        notes.splice(objectIndex, 1)
        console.log(chalk.red('Removed'))
    } else {
        console.log(chalk.yellow('The given data is not present'))
    }
   
    saveNotes(notes)
}

module.exports = {
    getNotes: getNotes, 
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote,
}