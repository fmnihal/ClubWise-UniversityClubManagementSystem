const Club = require('../models/club');

exports.getClubList = async (req, res) => {
  try {
    // Fetch list of clubs from the database
    const clubs = await Club.findAll();
    // Render the clubs list view
    res.render('clubs', { clubs });
  } catch (err) {
    console.error('Error fetching clubs:', err);
    res.status(500).send('Internal Server Error');
  }
};

exports.getClubDetails = async (req, res) => {
  const clubId = req.params.clubId;
  try {
    // Fetch club details and events from the database
    const club = await Club.findByPk(clubId, { include: 'events' });
    // Render the club details view
    res.render('clubDetails', { club });
  } catch (err) {
    console.error('Error fetching club details:', err);
    res.status(500).send('Internal Server Error');
  }
};
