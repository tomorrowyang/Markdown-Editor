const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const markdownRoutes = require('./routes/markdownRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', markdownRoutes);
app.use('/api/users', userRoutes);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).send('Access denied');

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send('Invalid token');
        req.user = user;
        next();
    });
};
app.use(authenticateToken);