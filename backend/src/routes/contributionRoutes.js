const express = require('express');
const contributionController = require('../controllers/contributionController');

const router = express.Router();

router
  .route('/')
  .post(contributionController.createContribution)
  .get(contributionController.getAllContributions);

module.exports = router;