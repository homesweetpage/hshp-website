'use strict';

// Dependencies
var del = require('del');

// Utils
var paths = require(appRoot + '/paths.json');

module.exports = function () {
    del(paths.dist + '/*');
};
