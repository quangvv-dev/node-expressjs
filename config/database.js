var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'spa',
    password: '3SmVg[r1jfFH1pn]',
    database: 'spa'
});

function connect() {
    try {
        connection.connect();
        console.log('connected as id ' + connection.threadId);
    } catch (error) {
        console.error('error connecting: ' + error.stack);
    }
}

module.exports = {connect}
