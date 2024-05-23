import {createTransport} from "nodemailer";
import { EMAIL_HOST, EMAIL_PASSWORD, EMAIL_USER } from "src/Config/env";

const sentEmail = (from:string,to:string | string[], subject:string, text:string, html:string) =>
  new Promise((resolve, reject) => {
    const transporter = createTransport({
      port: 587, // port for secure SMTP
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
      host: EMAIL_HOST,
      secure: true,
    });

    const mailOptions = {
      from, // sender address (who sends)
      to, // list of receivers (who receives)
      subject, // Subject line
      text, // plaintext body
      html, // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return reject(error);
      }
      return resolve(info);
    });
  });


export { sentEmail };
