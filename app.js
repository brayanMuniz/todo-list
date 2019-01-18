var express = require('express')
var app = express()
var bodyParser = require('body-parser');
const port = 6969;
var hbs = require('express-hbs');
let firebase = require('./firebase');

// What Express is going to uses
// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Routes
app.get('/', (req, res) => {
    firebase.readRoot().then(fres => {
        let totalData = []
        fres.forEach(el => {
            totalData.push(el.data())
        })
        console.log(totalData)
        res.render('landing.hbs', {
            rootData: totalData,
            error: false
        })
    }).catch(err => {
        console.log(err)
    })
})

app.post('/', (req, res) => {
    res.send(req)
})

app.listen(
    port, () =>
    console.log(`Example app listening on port ${port}!`)
)