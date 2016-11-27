/**
 * Created by OHBABY on 2016-11-23.
 */

var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 10,
    host: '35.162.132.169',
    port:3306,
    user:'mediaproject',
    password:'1234',
    database: 'nursnars'
});

module.exports = pool;