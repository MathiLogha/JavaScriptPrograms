var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mathilogha@outlook.com',
    pass: 'Logha@19112002'
  }
});

var mailOptions = {
  from: 'mathilogha@outlook.com',
  to: 'mathilogha19112002_ai@mepcoeng.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});