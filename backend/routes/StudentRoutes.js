const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController.js');

router.post('/student', StudentController.createStudent)

module.exports = router;