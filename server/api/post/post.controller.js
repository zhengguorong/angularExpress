/**
 * Created by zgr on 2014/11/30.
 */
var _ = require('lodash');
var Post = require('./post.model');

// Get list of things
exports.index = function(req, res) {
    Post.find(function (err, things) {
        if(err) { return handleError(res, err); }
        return res.json(200, things);
    });
};

// Get a single post
exports.show = function(req, res) {
    Post.findById(req.params.id, function (err, thing) {
        if(err) { return handleError(res, err); }
        if(!thing) { return res.send(404); }
        return res.json(thing);
    });
};
// Creates a new thing in the DB.
exports.create = function(req, res) {
    Post.create(req.body, function(err, thing) {
        if(err) { return handleError(res, err); }
        return res.json(201, thing);
    });
};

// Updates an existing post in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Post.findById(req.params.id, function (err, thing) {
        if (err) { return handleError(res, err); }
        if(!thing) { return res.send(404); }
        var updated = _.merge(thing, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, thing);
        });
    });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
    Post.findById(req.params.id, function (err, thing) {
        if(err) { return handleError(res, err); }
        if(!thing) { return res.send(404); }
        thing.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}