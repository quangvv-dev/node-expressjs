var express = require('express');
var router = express.Router();
const baseController = require('../app/controller/BaseController')

/* GET home page. */
router.get('/', baseController.index);
router.get('/:slug', baseController.index);

module.exports = router;
