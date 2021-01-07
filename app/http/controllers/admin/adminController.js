const controller = require("../controller")

class indexController extends controller {

    index(req, res) {

        res.json('Admin Page');

    }

}

module.exports = new indexController();