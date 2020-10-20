 // function sendEmail() {
   var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sangharshxerox@gmail.com",
    pass: "8149137181"
  }
});

var mailOptions = {
  from: "sangharshxerox@gmail.com",
  to: "sangharsh1008@gmail.com",
  subject: "Sending Email using Node.js",
  text: `Hi Sangharsh, thank you for your nice Node.js tutorials.
          I will donate 50$ for this course. Please send me payment options.`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
// }
