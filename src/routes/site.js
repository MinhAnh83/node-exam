const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/se', siteController.search);
router.get('/', siteController.index);

module.exports = router;
