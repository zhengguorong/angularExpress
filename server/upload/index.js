/**
 * Created by zgr on 2014/10/25.
 */
'use strict';
var express = require('express'),
    controller = require('./upload.controller');

var router=express.Router();

router.post("/",controller.index);
module.exports = router;