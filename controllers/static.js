/**
 * Created by Jen on 1/16/2015.
 */

var router = require('express').Router();
var path = require('path');
var express = require('express');

router.get('/', function(req, res) {
   res.sendFile('app.html', { root: path.join(__dirname, '../layouts') });
});

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));

module.exports = router;