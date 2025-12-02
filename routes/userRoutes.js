const express = require('express');
const router = express.Router();
const { createUser, getUserById } = require('../controllers/userController');

//register
router.post('/signup', createUser);
// get user by userId
router.get('/user/:userId', getUserById);

module.exports = router;