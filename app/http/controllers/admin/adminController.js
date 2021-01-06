class indexController {

    index(req, res) {

        res.json('Admin Page');

    }

}

module.exports = new indexController();