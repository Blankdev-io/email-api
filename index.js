const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection'); 

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'blanojog_samuel',
    password: '12Ot*97',
    database: 'blanojog_course_emails'
}

// Middlewares--------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))


// Routes-------------------------------------------------
app.get('/', (req, res) => {
    res.send('Welcome to my API');
})
app.get('/email-api', (re, res) => {
    
})

// Server Running-----------------------------------------
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'))
})