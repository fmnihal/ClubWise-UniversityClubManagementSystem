// Import necessary models
const MembershipRequest = require('../models/membershipRequest');

// Controller function to handle approving a membership request
exports.approveMembership = async (req, res) => {
  try {
    // Extract membership request ID from the request body
    const { requestId } = req.body;

    // Update the status of the membership request to 'approved' in the database
    await MembershipRequest.update(
      { status: 'approved' },
      { where: { id: requestId } }
    );

    res.status(200).json({ message: 'Membership request approved successfully' });
  } catch (error) {
    console.error('Error approving membership request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to handle rejecting a membership request
exports.rejectMembership = async (req, res) => {
  try {
    // Extract membership request ID from the request body
    const { requestId } = req.body;

    // Update the status of the membership request to 'rejected' in the database
    await MembershipRequest.update(
      { status: 'rejected' },
      { where: { id: requestId } }
    );

    res.status(200).json({ message: 'Membership request rejected successfully' });
  } catch (error) {
    console.error('Error rejecting membership request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
