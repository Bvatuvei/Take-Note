const router = require('express').Router();
const noteRoutes = require('./apiRoutes.js');

router.use(noteRoutes);

module.exports = router;
