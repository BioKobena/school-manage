const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController.js');

router.post('/student', StudentController.createStudent)
// router.get('/student', StudentController.getAllStudents)
// router.get('/student/:id', StudentController.getStudentById)
// router.put('/student/:id', StudentController.updateStudent)
// router.delete('/student/:id', StudentController.deleteStudent);
// router.post('/student/login', StudentController.login);
// router.post('/student/logout', StudentController.logout);
// router.post('/student/uploadAvatar', StudentController.uploadAvatar);
// router.post('/student/deleteAvatar', StudentController.deleteAvatar);
// router.get('/student/avatar/:filename', StudentController.getAvatar);
// router.post('/student/changePassword', StudentController.changePassword);
// router.post('/student/resetPassword', StudentController.resetPassword);
// router.post('/student/resetPassword/:token', StudentController.resetPasswordWithToken);
// router.post('/student/forgotPassword', StudentController.forgotPassword);

module.exports = router;