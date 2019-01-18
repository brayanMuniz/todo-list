var express = require('express')
var app = express()
const port = 6969;
var hbs = require('express-hbs');
var path = require('path');
let firebase = require('./firebase')
// What Express is going to uses
app.use(express.static('public'))
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Routes
app.get('/', (req, res) => {
    res.render('landing.hbs')
    // render('fileName' {properties to send back})
})

app.listen(
    port, () =>
    console.log(`Example app listening on port ${port}!`)
)