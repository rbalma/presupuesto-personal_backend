const Users = require('../models/Users');
const jwt = require('jsonwebtoken');

exports.newUser = async (req, res) => {
    const { email, name, lastname, password } = req.body;
    try {
        const user = await Users.create({ email, name, lastname, password });
        res.json(user);
    } catch (error) {
        res.send({message: error.errors[0].message})
    } 
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
 
        const user = await Users.findOne({ 
            where: { email: email }
         });

         if(!user) {
            await res.status(401).json({message: 'El usuario no existe'});
            next();
         } else {
             if(!user.checkPassword(password)){
                await res.status(401).json({message: 'La contraseña es incorrecta'});
                next();
             } else {
                 const token = jwt.sign({
                     email: user.email,
                     name: user.name,
                     id: user._id
                 }, 'SECRETKEY', {
                     expiresIn: '3h'
                 });

                 res.json({ token });
             }
         }

}
