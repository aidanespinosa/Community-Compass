

// Import the controller
// - Controller Directory
// - FeedbackController.js
const FeedbackController = require('../controllers/FeedbackController');



// @desc    Create a new feedback
// @route   POST /api/feedback
// @access  Private

router.post('/', FeedbackController.addFeedback);
