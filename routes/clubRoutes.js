const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');

// Route to display list of clubs
router.get('/clubs', clubController.getClubList);

// Route to view details and events of a specific club
router.get('/clubs/:clubId', clubController.getClubDetails);

module.exports = router;
