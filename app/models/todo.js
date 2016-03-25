/**
 * Created by Shmulik on 3/25/2016.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: String,
    done: Boolean
});