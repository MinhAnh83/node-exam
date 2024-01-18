const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');


router.get('/:slug', CourseController.show); //de len tren index khong thi vao link nay no chay index



module.exports = router;
