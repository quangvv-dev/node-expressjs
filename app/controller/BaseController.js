const User = require('../../model/users')

class BaseController {
    async index (req, res) {
        let users = await User.findByPk(6);
        res.render('index')
    }
}
 module.exports = new BaseController;
