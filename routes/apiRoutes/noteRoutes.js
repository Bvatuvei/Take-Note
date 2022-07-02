const router = require('express').Router();
const { notes } = require('../../data/notes.json');
const path = require("path");
const fs = require('fs');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  let note = req.body;

  if (!note) {
    res.status(400).send('Error');
  } else {
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../data/notes.json'),
      JSON.stringify({notes}, null, 2)
    );
    res.json(notes);
  }

});


module.exports = router;