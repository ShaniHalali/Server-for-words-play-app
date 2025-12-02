const express = require('express');
const router = express.Router();
const { createUser, getUserById, updateUserLanguage, updateUserDifficulty } = require('../controllers/userController');
const { validateUserExists } = require('../middleware/validateUserExists')

//register
router.post('/signup', createUser);
// get user by userId
router.get('/user/:userId',validateUserExists, getUserById);
// update user language by userId
router.patch('/user/:userId/language',validateUserExists, updateUserLanguage);
// update user difficulty by userId
router.patch('/user/:userId/difficulty', validateUserExists, updateUserDifficulty );

module.exports = router;