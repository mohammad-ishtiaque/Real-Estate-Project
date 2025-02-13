const errorHandler = require('../utils/error');
const User =  require('./../models/user.model');
const bcrypt = require('bcryptjs');

signup =  async(req, res, next) => {

    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password:hashedPassword });
    try {
        await newUser.save();
        res.status(201).json('User created successfully');
    }   catch (err) {
        next(err);
    }
};


module.exports = { signup };