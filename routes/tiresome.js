/**
 * Created by zhengqiguang on 2017/4/30.
 */
var express = require('express');
var router = express.Router();
var tiresome = require("../logic/tiresome");


/* GET home page. */
router.get('/list', function (req, res, next) {
    tiresome.getList(req, res);

    res.json({a: 1});


    // res.render('index', {title: 'Express'});
});

module.exports = router;