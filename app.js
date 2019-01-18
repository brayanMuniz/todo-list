var express = require('express')
var app = express()
const port = 6969;
var hbs = require('express-hbs');
let firebase = require('./firebase');

// What Express is going to uses
app.use(express.static('public'))
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Routes
app.get('/', (req, res) => {

    firebase.readRoot().then(fres => {
        // fres.forEach(doc => {
        //     console.log("​doc", doc.data())
        // })

        console.log(fres);
        res.render('landing.hbs', {
            rootData: 'hello'
        })

    }).catch(err => {
        console.log(err)
    })
})

app.listen(
    port, () =>
    console.log(`Example app listening on port ${port}!`)
)