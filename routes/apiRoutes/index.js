const path = require('path');
const fs = require('fs');
const router = require('express').Router();

const notes = require('../../db/db.json');

// npm for generating unique id
const uniqueId = require('uniqid'); 

router.get('/notes', (req, res)=>{
    // send the notes.html as the response
    // whenever the /notes page is accessed on the server
    res.json(notes);
});

router.post('/notes', (req, res)=>{

    const newNote = {"title": req.body.title, "text": req.body.text, "id": uniqueId()};
    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notes, null, 2)
    );

    res.json(newNote);
});

router.delete('/notes/:id', (req, res)=>{
    let newNotes;

    notes.forEach((note, index) =>{
        if(note.id === req.params.id){
            newNotes = notes.splice(index, 1);
            return;
        }
    });

    if(newNotes){
        fs.writeFileSync(path.join(__dirname, '../../db/db.json'),
        JSON.stringify(newNotes, null, 2)
        );
        res.json(newNotes);
    }
    else{
        res.send(404);
    }
});

// export the server path router from this module
module.exports = router;