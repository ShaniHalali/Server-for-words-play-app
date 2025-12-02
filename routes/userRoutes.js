const express = require('express');
const router = express.Router();
const { createUser, getUserById, updateUserLanguage } = require('../controllers/userController');
const { validateUserExists } = require('../middleware/validateUserExists')

//register
router.post('/signup', createUser);
// get user by userId
router.get('/user/:userId',validateUserExists, getUserById);
// update user langusge by userId
router.patch('/user/:userId/language',validateUserExists, updateUserLanguage)

module.exports = router;