import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
    const {name, email, subject, message} = req.body;

    const user = process.env.user;

    //console.log("User: ", user);
    //console.log('Pass: ', process.env.pass);

    const data = {
        name, email, subject, message
    }

    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        auth: {
            user: user,
            pass: process.env.pass
        },
        tls: {rejectUnauthorized: false}
    })

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "kyle_vannarath@hotmail.ca",
            replyTo: email,
            subject: `[Lead from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.name}, their email is: ${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="https://manuarora.in/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Kyle Vannarath<br>Software Developer<br>+1 647-648-0815</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://kylevannarath.ca/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://github.com/VanWrath/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://www.linkedin.com/in/kyle-vannarath-66654b130/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
              </div>
              </div>
      </body>
      </html>`,
        });

        console.log("Message sent: ", mail.messageId);
        return res.status(200).json({message: "success"})
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Could not send email. Your message was not sent."})
    }
        
}