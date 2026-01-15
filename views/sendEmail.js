const { SMTPClient, Message } = require('emailjs')/*  */

const url = /* 'http://localhost:3000' */ 'https://secrets-h91m.onrender.com'

const client = new SMTPClient({
  user: 'ishukumar46025@gmail.com',
  password: 'orjx kbtt njyf umgm',
  host: 'smtp.gmail.com',
  ssl: true
})

async function sendGmail(to, verificationCode, name) {
  console.log(to)
  const htmlContent = `
  <div style="width:80%; background-color:white; padding:10px; box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;">
      <h1 style="color:#198754">Secrets</h1>
      <h2>Hi ${name}</h2>
      <h1>Your verification code is<br/><span style="color:#198754; font-size:30px">${verificationCode}</span></h1>
      <a style="background-color:#198754; color:white; text-decoration:none; padding:5px 8px; border-radius:10px; display:inline-block;" href="${url}/verification">Verify</a>
    </div>
  `
  const message = new Message({
    from: 'Secrets Zx <ishukumar46025@gmail.com>',
    to: to,
    subject: 'Email Verification',
    attachment:[
      {
        data:htmlContent,
        alternative:true,
        contentType:'text/html'
      }
    ]
  })
  try {
    await client.sendAsync(message)
    console.log('Email sent successfully.')
  } catch (error) {
    console.error('Failed to send email:', error);
  } finally {
    client.smtp.close();
  }
}
module.exports = sendGmail