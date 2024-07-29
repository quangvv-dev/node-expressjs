const Sequelize = require('sequelize');
const sequelize = new Sequelize('spa', 'spa', '3SmVg[r1jfFH1pn]', {
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports = sequelize;
