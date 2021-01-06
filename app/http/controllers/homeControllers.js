const controller = require('./cntroller')

class homeController extends controller{

    index(req, res) {

        res.json(this.message);

    }
    message() {
        return 'home page'
    }

}

module.exports = new homeController();