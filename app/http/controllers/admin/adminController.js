const controller = require("../cntroller")

class indexController extends controller {

    index(req, res) {

        res.json('Admin Page');

    }

}

module.exports = new indexController();