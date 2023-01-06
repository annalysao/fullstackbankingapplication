var express = require('express');
var app     = express();

const faunadb = require('faunadb');
const client = new faunadb.Client({ secret: '' })

const { 
    Paginate,
    Get,
    Select,
    Match,
    Index,
    Create,
    Collection,
    Lambda,
    Var,
    If,
    Join,
    KeyFromSecret,
    Events,
    Login,
    Logout,
    Identify,
} = faunadb.query;


//used to server static files from public directory
app.use(express.static('public'));


//create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name,req.params.email,req.params.password),
        then((user) => {
            console.log(user);
            res.send(user);
        });
    });

//login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email: req.params.email,
        password: req.params.password
    });
});

// return all accounts
app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
    });


// Deposit
app.get('/deposit/:email/:amount', function (req, res) {
    res.send({
        email: 'peter@mit.edu',
        amount: 100
    });
});

// withdraw
app.get('/withdraw/:email/:amount', function (req, res) {
    res.send({
        email: 'peter@mit.edu',
        amount: 100
    });
});

// balance; balance is not being returned correctly right now
app.get('/balance/:email/:amount', function (req, res) {
    res.send({
        email: 'peter@mit.edu',
        amount: 100
    });
});



/* var port = 3000;
app.listen(port);
console.log('Running on port: ' + port); */

app.listen(5000, () => console.log('API on http://localhost:5000'))