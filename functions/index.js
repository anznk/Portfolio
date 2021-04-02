// const functions = require("firebase-functions");

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });



// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
// const adminEmail = functions.config().admin.email;

// // 送信に使用するメールサーバーの設定
// const mailTransport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword
//   }
// });

// // 管理者用のメールテンプレート
// const adminContents = data => {
//   return `以下内容でホームページよりお問い合わせを受けました。
// お名前：
// ${data.name}
// メールアドレス：
// ${data.email}
// 内容：
// ${data.content}
// `;
// };

// exports.sendMail = functions.https.onCall((data, context) => {
//   // メール設定
//   let adminMail = {
//     from: gmailEmail,
//     to: adminEmail,
//     subject: "ホームページお問い合わせ",
//     text: adminContents(data)
//   };

//   // 管理者へのメール送信
//   mailTransport.sendMail(adminMail, (err, info) => {
//     if (err) {
//       return console.error(`send failed. ${err}`);
//     }
//     return console.log("send success.");
//   });
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yourgmailaccount@gmail.com',
        pass: 'yourgmailaccpassword'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: 'Your Account Name <yourgmailaccount@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'I\'M A PICKLE!!!', // email subject
            html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
                <br />
                <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});
