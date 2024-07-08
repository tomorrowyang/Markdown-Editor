const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createUser, findUserByUsername } = require('../models/User');

const register = (req, res) => {
    const { username, password } = req.body;
    findUserByUsername(username, (err, user) => {
        if (err) return res.status(500).send(err);
        if (user) return res.status(400).send('User already exists');

        createUser(username, password, (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).send('User created');
        });
    });
};

const login = (req, res) => {
    const { username, password } = req.body;
    findUserByUsername(username, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(400).send('User not found');

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).send(err);
            if (!isMatch) return res.status(400).send('Invalid credentials');

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        });
    });
};

module.exports = { register, login };
