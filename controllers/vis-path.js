const visPath = require('../models/vis-path');

module.exports.getPath = function (req, res) {
    res.json(visPath.getPath(session.userid))
}