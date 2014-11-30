/**
 * Created by zgr on 2014/11/30.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    publicNow: Boolean,
    content: String
});

module.exports = mongoose.model('Post', PostSchema);