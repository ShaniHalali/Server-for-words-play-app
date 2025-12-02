const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

//register
router.post('/signup', createUser);

module.exports = router;