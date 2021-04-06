const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({
origin: true
})

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

exports.submit = functions.https.onRequest((req, res) => {
res.set('Access-Control-Allow-Origin', '*')
res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
res.set('Access-Control-Allow-Headers', '*')

// console.log('request type', req.method);
// cors(req, res, () => {
// if (req.method !== 'POST') {
//   return
// }

const mailOptions = {
  from: req.body.email,
  replyTo: req.body.email,
  to: gmailEmail,
  subject: `just messaged me from my website`,
  text: 'aaa',
  html: `<p>aaa</p>`,
}

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user:gmailEmail,
    pass:gmailPassword
  }
})

  
return mailTransport.sendMail(mailOptions).then(() => {
  console.log('New email sent to:', gmailEmail);
  res.status(200).send({
    isEmailSend: true
  })
  return
})
})
//})
//})