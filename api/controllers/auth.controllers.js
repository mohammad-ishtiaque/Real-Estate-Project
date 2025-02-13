const User =  require('./../models/user.model');
const bcrypt = require('bcryptjs');

signup =  async(req, res) => {

    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password:hashedPassword });
    try {
        await newUser.save();
        res.status(201).send('User created successfully');
    }   catch (err) {
        res.status(500).json(err.message);
    }
};


module.exports = { signup };