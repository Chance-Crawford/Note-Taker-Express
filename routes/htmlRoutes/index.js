const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res)=>{
    // send the notes.html as the response
    // whenever the /notes page is accessed on the server
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// whenever any other page is called that hasn't been defined,
// send them to homepage index.html
router.get('*', (req, res)=>{
    // send the homepage index.html as the response
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// export the server path router from this module
module.exports = router;