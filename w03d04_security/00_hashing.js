const bcrypt = require('bcryptjs');

const plaintTextPassword = 'password';

// generate salt
// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt)
//   bcrypt.hash(plaintTextPassword, salt, (err, hash) => {
//     console.log('hash', hash)
//   })
// })

const salt = bcrypt.genSaltSync(10)
console.log('salt sync', salt)
const hash = bcrypt.hashSync(plaintTextPassword, salt)
console.log('hash sync', hash)

// comparing passwords
// bcrypt.compare(plaintTextPassword, hash, (err, success) => {
//   console.log('success?', success)
// })

// sync compare
const match = bcrypt.compareSync('somethingelse', hash)
console.log('match', match)

const newHash = bcrypt.hashSync('password')
console.log('new hash', newHash)
