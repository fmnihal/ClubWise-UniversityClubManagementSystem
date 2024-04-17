// Import necessary models
const MembershipRequest = require('../models/membershipRequest');

// Controller function to handle applying for membership
exports.applyForMembership = async (req, res) => {
  try {
    // Extract user input from the request body
    const { userId, clubId } = req.body;

    // Create a new membership request in the database
    const newRequest = await MembershipRequest.create({
      userId,
      clubId,
      status: 'pending' // Set the initial status of the request to 'pending'
    });

    res.status(201).json({ message: 'Membership request submitted successfully' });
  } catch (error) {
    console.error('Error applying for membership:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
