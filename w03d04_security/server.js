const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// bring in bcrypt
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session')


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
// app.use(cookieParser());

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

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


// GET / --> login page
app.get('/', (req, res) => {
  res.render('login');
})

// GET /registration --> registration page
app.get('/register', (req, res) => {
  res.render('register')
})

// GET /protected --> protected page for logged in users
app.get('/protected', (req, res) => {
  const userId = req.session.userId;
  // console.log('req.session', req.session)

  if (!userId) {
    return res.status(401).send('you are not authorized to be here')
  }

  const user = users[userId];

  if (!user) {
    return res.status(400).send('you have an old cookie! git gud!')
  }
  
  const templateVars = { user }
  res.render('protected', templateVars)
})

// POST /login --> login form
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password){
    return res.status(400).send('email and password cannot be blank');
  }

  const user = findUserByEmail(email);

  // we didn't find user
  if (!user) {
    return res.status(400).send('no user with that email found')
  }

  // found the user, now does their password match?
  bcrypt.compare(password, user.password, (err, success) => {
    // if passwords did not match
    if (!success) {
      return res.status(400).send('password does not match')
    }
    // otherwise login set a cookie
    // res.cookie('userId', user.id);
    // encrypt cookies
    req.session.userId = user.id
    res.redirect('/protected')
  
  })

  // if (user.password !== password) {
  //   return res.status(400).send('password does not match')
  // }

  // // happy path
  // res.cookie('userId', user.id);

  // res.redirect('/protected')

})

// POST /register --> register a user form
app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const superSecret = req.body.superSecret

  if (!email || !password) {
    return res.status(400).send('email and password cannot be blank');
  }

  const user = findUserByEmail(email);

  if (user) {
    return res.status(400).send('the email address is alread in use')
  }

  const id = Math.floor(Math.random() * 1000) + 1;
  //async
  // bcrypt.genSalt(10, (err, salt) => {
  //   bcrypt.hash(password, salt, (err, hash) => {
      
  //     // store hashed password in user object
  //     users[id] = {
  //       id, 
  //       email,
  //       password: hash,
  //       superSecret
  //     }

  //     console.log('users', users)

  //     res.redirect('/')
  //   })
  // })
  
  // sync
  // generate salt
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt);

    users[id] = {
      id, 
      email,
      password: hash,
      superSecret
    }
    console.log('users sync', users)

    res.redirect('/')


})

// POST /logout --> logout form
app.post('/logout', (req, res) => {
  // res.clearCookie('userId');
  req.session = null;
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})