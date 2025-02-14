const errorHandler = require('../utils/error');
const User = require('./../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


signup = async (req, res, next) => {

    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json('User created successfully');
    } catch (err) {
        next(err);
    }
};


signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, 'User not found'));
        }
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, 'Wrong credentials'));
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: pass, ...rest } = validUser._doc; // remove password from user object
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
        // res.status(200).json('User logged in successfully');
    } catch (err) {
        next(err);
    }
}


module.exports = { signup, signin };