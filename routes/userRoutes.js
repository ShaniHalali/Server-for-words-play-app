const express = require('express');
const router = express.Router();
const { createUser, getUserById, updateUserLanguage, updateUserDifficulty, updateUserTotalScore, updateUserAnswers } = require('../controllers/userController');
const { validateUserExists } = require('../middleware/validateUserExists')

//register
router.post('/signup', createUser);
// get user by userId
router.get('/user/:userId',validateUserExists, getUserById);
// update user language by userId
router.patch('/user/:userId/language',validateUserExists, updateUserLanguage);
// update user difficulty by userId
router.patch('/user/:userId/difficulty', validateUserExists, updateUserDifficulty );
// update user total score by userId
router.patch('/user/:userId/totalScore', validateUserExists, updateUserTotalScore );
// update user stat answers by userId
router.patch('/user/:userId/answers', validateUserExists, updateUserAnswers);

module.exports = router;