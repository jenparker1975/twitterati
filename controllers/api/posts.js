/**
 * Created by Jen on 1/16/2015.
 */

var Post = require('../../models/post');
var router = require('express').Router();

router.get('/', function (req, res){
    Post.find()
        .sort('-date')
        .exec(function (err, posts){
            if (err){
                return next(err);
            };

            res.status(200).json(posts);
        });
});

router.post('/', function (req, res){

    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });

    post.save(function (err, post){
        if (err){
            return next(err);
        };
        res.status(201).json(post);
    });

});

module.exports = router;
