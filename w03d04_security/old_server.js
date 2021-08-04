const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8080;

const users = {
  'abcd': {
    id: 'abcd',
    email: 'scully@xfiles.com',
    password: 'logicOverFeeling',
    superSecret: "maybe Mulder is right"
  },
  'efgh': {
    id: 'efgh',
    email: 'mulder@xfiles.com',
    password: 'password',
    superSecret: "I don't actually believe"
  }
}

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

app.set('view engine', 'ejs');


const findUserByEmail = (email) => {
  for (const userId in users) {
    const user = users[userId];
    // if the email we pass matches a user's email
    if (user.email === email) {
      return user;
    }
  }

  // no user found
  return null;
}



app.get('/', (req, res) => {
  const error = req.cookies.error
  const templateVars = { error: error ? error : null}
  res.render('login', templateVars);
})

app.get('/register', (req, res) => {
  const regError = req.cookies.regError
  const templateVars = { regError: regError ? regError: null}
  res.render('register', templateVars)
})

app.get('/protected', (req, res) => {
  const userId = req.cookies.userId;

  const user = users[userId];

  if (!user) {
    res.cookie('error', 'not logged in')
    return res.redirect('/')
  }
  
  const templateVars = { user }
  res.render('protected', templateVars)
})

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  

  if(!email || !password){
    res.cookie('error', 'email and password can not be blank')
    return res.redirect('/')
  }

  const user = findUserByEmail(email);

  // we didn't find user
  if (!user) {
    res.cookie('error', 'no user with than email found')
    return res.redirect('/')
  }

  // found the user, now does their password match?
  if (user.password !== password) {
    res.cookie('error', 'incorrect password')
    return res.redirect('/')
  }

  // happy path
  res.cookie('userId', user.id);
  res.clearCookie('error')
  res.redirect('/protected')

})

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const superSecret = req.body.superSecret

  if (!email || !password) {
    res.cookie('regError', 'email and password can not be blank')
    return res.redirect('/register')
  }

  const user = findUserByEmail(email);

  if (user) {
    res.cookie('regError', 'email already exists')
    return res.redirect('/register')
  }

  const id = Math.floor(Math.random() * 1000) + 1;

  users[id] = {
    id, 
    email,
    password,
    superSecret
  }

  res.clearCookie('regError')
  res.clearCookie('error');
  res.redirect('/')
})

app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})