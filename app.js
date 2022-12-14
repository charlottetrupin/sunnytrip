const express = require('express'); //Import the express dependency
const path = require('path')
const expressLayouts = require('express-ejs-layouts') // Import express layouts 
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 8080;                  //Save the port number where your server will be listening

const bodyParser = require('body-parser');
const fs = require('fs');
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



app.get('/vis', function (req, res) {
  session=req.session;
  if(session.userid){
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
    var path = req.body.p;
    var date = req.body.d
    fs.writeFile("json/"+date+".json", JSON.stringify(path), err=>{
        if(err){
          console.log(err);
        }
        else { console.log("file save correctly")}
    });
    res.end();
})



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