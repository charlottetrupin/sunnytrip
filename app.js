const express = require('express'); //Import the express dependency
const path = require('path')
const expressLayouts = require('express-ejs-layouts') // Import express layouts 
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 8080;                  //Save the port number where your server will be listening

const bodyParser = require('body-parser');

//conntectin API to app.post request
const request = require('request');
const apiKey='f5888c48b5394d11c84f3d67e835ca8e';

/*********************************/
/** DEFINITIONS TO USE SESSIONS **/
/*********************************/
// Declare sessions
const sessions = require('express-session');
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

//username and password
const myusername = 'f@f.com'
const mypassword = 'f'

// a variable to save a session
var session;

// to make session user variable available everywhere
app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  next();
});

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static('public'));
app.set('view engine','ejs')

/*********************************/
/*********** USING FILES *********/
/*********************************/
// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

// Adding css and js files from installed apps
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))




/*********************************/
/** TEMPLATE ENGINES AND LAYOUTS */
/*********************************/

// This requires a folder called views
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(expressLayouts)
app.set('layout', './layouts/base-layout.ejs')




/*********************************/
/************ Routes *************/
/*********************************/

// MAIN
app.get('', (req, res) => {
    session = req.session;
    if(session.userid){
      res.render("index.ejs", {'userid':session.userid, 'username': session.username})
    }else
      res.sendFile('views/login.html',{root:__dirname})
})

app.get('/weather',function (req,res){
  //res.send('Hello World')
  console.log("ici");
  res.render('views/vis.ejs',{weather:null, error:null, weatherIcon:null, date:null});
})


app.get('/vis', function (req, res) {
  session=req.session;
  if(session.userid){
    console.log("i'm here");
    res.render("vis.ejs", {'userid':session.userid, 'username': session.username})
  } else
    res.sendFile('views/login.html',{root:__dirname})
})


app.get('/trip', function(req,res) {
  session=req.session;
  if(session.userid){
    res.render("partials/list_trip.ejs", {'userid':session.userid, 'username': session.username})
  } else
    res.sendFile('views/login.html',{root:__dirname})
})


app.post('/savetrip', function(req,res){
    console.log("here")
    var b = req.body.p;
    console.log(b);
    res.end();
})



/**
// LOGIN
app.post('/login',(req,res) => {
  if(req.body.userid == myusername && req.body.password == mypassword){
      session=req.session;
      session.userid=req.body.userid;
      res.render("index.ejs", {'userid':session.userid})
  }
  else{
      console.log(req.body.username +" do not match "+req.body.password)
      res.send('Invalid username or password.<a href="/">Try again</a>');
  }
})
app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});**/

const userRoutes = require('./routes/user')
app.use(userRoutes)

const visPathRoutes = require('./routes/vis-path')
app.use(visPathRoutes)

/*********************************/
/******* Application start *******/
/*********************************/

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});