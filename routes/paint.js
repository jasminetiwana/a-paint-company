const multer = require('multer');
const upload = multer();

const express = require('express');

const router = express.Router();
const paintController = require('../controller');

router.get('/getAllStatus', upload.none(), paintController.getAllStatus);

router.post('/updatestatus', upload.none(), paintController.updateStatus);

module.exports = router;