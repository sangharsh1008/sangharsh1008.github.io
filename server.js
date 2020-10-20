const express = require("express");
const path = require("path");
const app = express();

const loginMethod = () => {
  var request = require("request");
  var resp;
  var options = {
    method: "POST",
    url: "http://172.19.10.10:8181/mis/index.php/login/validate_login",
    headers: {
      "postman-token": "50da117f-7eac-3974-13ba-ef18883a1011",
      "cache-control": "no-cache",
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    },
    form: { email: "sangharshs@mitrmedia.com", password: "Sangharsh@123" }
  };

  return request(options, function(error, response, body) {
    if (error) {
      throw new Error(error);
    } else {
      console.log(body, response);
    }
    resp = body;
  });
  return resp;
};


app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  // res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/sendMail", function(req, res) {
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

  return res.send("pong");
});
//
// app.get("/pdfFile", function(req, res) {
//   res.sendFile(path.join(__dirname, "testFiles", "_Panoply Manual.pdf"));
// });
//
// app.get("/login", (req, res) => {
//   res.cookie("name", "express").send("cookie set"); //Sets name = express
//   res.send(loginMethod());
// });
//
// const fs = require("fs");
// app.get("/getQustion", (req, res) => {
//   let question = {};
//   fs.readFile("https://res.cloudinary.com/dngaz1fiq/raw/upload/v1587894581/papers/text1_qpemm0.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     let splitted = data.toString().split("\n");
//     let count = 1;
//     let qutionNo = 1;
//     let optionArr = [];
//     let optCount = 1;
//     let correctAns = null;
//     for (let i = 1; i < splitted.length - 1; i++) {
//       if (i !== count) {
//         if (splitted[i].startsWith("opt")) {
//           optionArr.push(splitted[i].replace(["opt" + optCount], ""));
//           optCount++;
//         } else {
//           correctAns = splitted[i].replace(["Answer"], "");
//         }
//       } else {
//         Object.assign(question, {
//           ["question" + qutionNo]: {
//             question: splitted[i].replace("question ", "")
//           }
//         });
//         optionArr = [];
//         count += 6;
//         optCount = 1;
//         qutionNo += 1;
//       }
//       question["question" + (qutionNo - 1)] &&
//         Object.assign(question["question" + (qutionNo - 1)], {
//           option: optionArr,
//           correctAnswer: Number(correctAns)
//         });
//     }
//     res.send(question);
//   });
// });
// app.use(bodyParser.json());
//
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// app.post("/getPage", (req, res) => {
//   console.log(req.body);
//   const pageNumber = req.body.pageNumber;
//   const fileName = "output" + pageNumber + ".png";
//   console.log(fileName);
//   res.sendFile(path.join(__dirname, "Images", fileName));
//   // res.sendFile(path.join(__dirname, "testFiles", "_Panoply Manual.pdf"));
// });
//
// app.get("/addData", (req, res) => {
//   res.send(addData());
// });
//
// app.get("/taskAssigned", (req, res) => {
//   res.send(taskAssigned());
// });
//
// app.post("/trial", function(req, res) {
//   res.sendFile(path.join(__dirname, "testFiles", "_Panoply Manual.pdf"));
// });

app.listen(process.env.PORT || 8080);
console.log("executed");
