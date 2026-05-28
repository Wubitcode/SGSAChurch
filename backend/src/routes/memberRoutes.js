const express = require('express');
const memberController = require('../controllers/memberController');

const router = express.Router();

// TODO: In the upcoming sessions, we will attach our auth guard middleware here 
// to lock these down securely. For now, let's keep them bare so you can test them smoothly.

router
  .route('/')
  .post(memberController.createMember)
  .get(memberController.getAllMembers);

module.exports = router;