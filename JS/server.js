const express = require('express') // Include ExpressJS
const app = express() // Create an ExpressJSS app
var path = require ('path')
const bodyParser = require('body-parser'); // Middleware

app.use(bodyParser.urlencoded({ extends: false }));
app.use(express.static(path.join(__dirname + '/css')));

// Route to Homepage
app.get('/znafian', (req, res) => {
  res.sendFile(__dirname + '/znafian.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
})

app.post('/login', (req, res) => {
  //Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send('Username:' + username + 'Password:' + password);
});

const port = 8000 // Port we will listen on

//  Function on listen on the port
  app.listen(port, () => console.log('This app is listening on port ' + port));