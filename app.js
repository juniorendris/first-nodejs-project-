const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rev1',
    password: 'UmMfGxfRd)@KPyUx',
    database: 'rev1',
});
connection.connect((err)=>{
    if(err){
        console.log('error occured in your db type:',err);
    }
    else {
        console.log('connected to the database');
    }
});
app.listen(3000);