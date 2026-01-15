const { SMTPClient, Message } = require('emailjs')/*  */
const dotenv = require('dotenv')
dotenv.config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const url = /* 'http://localhost:3000' */ 'https://secrets-h91m.onrender.com'

async function sendGmail(to, verificationCode, name) {
  console.log(to)
  const message = {
    from: 'ishu46025@gmail.com',
    to: to,
    subject: 'Email Verification',
    html: `
  <div style="width:80%; background-color:white; padding:10px; box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;">
      <h1 style="color:#198754">Secrets</h1>
      <h2>Hi ${name}</h2>
      <h1>Your verification code is<br/><span style="color:#198754; font-size:30px">${verificationCode}</span></h1>
      <a style="background-color:#198754; color:white; text-decoration:none; padding:5px 8px; border-radius:10px; display:inline-block;" href="${url}/verification">Verify</a>
    </div>`
  }
  sgMail.send(message)
  .then(()=>{console.log('email sent successfully')},error=>{console.log(error)})
}
module.exports = sendGmail