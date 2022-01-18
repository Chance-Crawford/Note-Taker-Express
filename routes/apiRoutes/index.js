const path = require('path');
const router = require('express').Router();

const notes = require('../../db/db.json');

router.get('/notes', (req, res)=>{
    // send the notes.html as the response
    // whenever the /notes page is accessed on the server
    res.json(notes);
});

// export the server path router from this module
module.exports = router;