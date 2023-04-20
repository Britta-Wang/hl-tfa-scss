var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var nodemailer = require('nodemailer');

var sendEmail = function(message){
  var smtpConfig = {
      host: 'mail.hinterlands.tech',
      port: 465,
      secure: true, // use TLS
      auth: {
          user: 'info@qualkingsflooring.com',
          pass: 'rhv2xzyf'
      },
      logger: false,
      debug: true // include SMTP traffic in the logs
  }
  var defaultConfig = {
      // default message fields
      // sender info
      from: 'Information <info@qualkingsflooring.com>' // sender address
  }
  //var smtpConfig = {
  //host: 'smtp-relay.gmail.com',
  //port: 465,
  //secure: true // use SSL,
  //};
  var isSent = true;

  var transporter = nodemailer.createTransport(smtpConfig, defaultConfig);
  // replace hardcoded options with data passed (somedata)

  transporter.sendMail(message, function(error, info){
    if(error){
      console.log('Error: ' + error);
      isSent = false;
    }else{
      console.log('Message sent: ' + info.response);
    };
  });

  return isSent;
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/api/contactus', upload.array(), function (req, res) {
    console.log('ame: ' + req.body.name);
    console.log('subject: ' + req.body.subject);
    console.log('mailto: ' + req.body.email);
    console.log('msg: ' + req.body.message);
    var message = {
        to: ['info@qualkingsflooring.com'], // list of receivers
        subject: "[CONTACTUS] " + req.body.name + " [" + req.body.email + "] " + req.body.subject, // Subject line
        text: req.body.message // You can choose to send an HTML body instead
    }
    if (sendEmail(message)) {
        res.json({
            code: '0',
            msg: 'success'
        });
    } else {
        res.json({
            code: '1',
            msg: 'error'
        });
    };
    res.end();
});

app.post('/api/subscribe', upload.array(), function (req, res) {
    console.log('name: ' + req.body.name);
    console.log('phone: ' + req.body.phone);
    console.log('address: ' + req.body.address);
    console.log('samples: ' + req.body.samples);
    var message = {
        to: ['info@qualkingsflooring.com'], // list of receivers
        subject: "[SAMPLES_REQUEST]" + req.body.name + " - " + req.body.phone, // Subject line
        text: req.body.samples // You can choose to send an HTML body instead
    }
    if (sendEmail(message)) {
        res.json({
            code: '0',
            msg: 'success'
        });
    } else {
        res.json({
            code: '1',
            msg: 'error'
        });
    };
    res.end();
});

app.listen(8000, function () {
    console.log('Ready');
});
