const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');


router.get('/search', newsController.search); //de len tren index khong thi vao link nay no chay index
router.get('/', newsController.index);

router.get('/:slug', newsController.show);

module.exports = router;
