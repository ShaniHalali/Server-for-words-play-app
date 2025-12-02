const express = require('express');
const router = express.Router();
const { createUser, getUserById, updateUserLanguage } = require('../controllers/userController');

//register
router.post('/signup', createUser);
// get user by userId
router.get('/user/:userId', getUserById);
// update user langusge by userId
router.patch('/user/:userId/language', updateUserLanguage)

module.exports = router;