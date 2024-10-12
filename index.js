const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const db = require('./models');
const movieRoutes = require('./routes/movies');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/movies', movieRoutes);

db.sequelize.sync().then(() => {
    console.log('Database connected');
});

// Define routes here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});