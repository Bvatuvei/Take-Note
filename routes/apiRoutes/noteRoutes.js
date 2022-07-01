const router = require('express').Router();
const { notes } = require('../../data/notes');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  

})


module.exports = router;