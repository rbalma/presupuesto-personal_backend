const Users = require('../models/Users');

exports.getUsers = async (req, res) => {

}


exports.newUser = async (req, res) => {
    const { email, name, lastname, password, repeatPassword } = req.body;

    const user = await Users.create({ email, name, lastname, password, repeatPassword });

    res.json(user);
}