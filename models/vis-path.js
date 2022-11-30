const user = require('./user')

module.exports = class VisPath {
    static getPath = function (userid) {
        const username = user.getUsername(userid)
        return require('../data/' + username + '-path.json')
    }
}