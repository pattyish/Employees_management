import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
export default async function (data) {
  let transporter = nodemailer.createTransport({
    host: process.env.SERVERHOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.USEREMAIL,
      pass: process.env.USERPASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const message = `
    <h2 style="color: blue;"><b>this prove that you joined awesomity</b></h2>
    <hr>
    <div>
    <h3><b>your provide infromation are</b></h3>
    <label>Name</label> : ${data.empl_name}<br>
    <label>National ID</label> : ${data.nationalid}<br>
    <label>Phone</label> : ${data.phone}<br>
    <label>Data Of Birth</label> : ${data.dob}<br>
    <label>Postion</label> : ${data.position}<br>
    <label>Status</label> : ${data.status}<br>
    <hr>
    <p>
    we appreciate you join awesomity lab
    </p>
    </div>
    `;
  let info = await transporter.sendMail({
    from: `"Awesiomity" <${process.env.USEREMAIL}>`,
    to: `${data.email}`,
    subject: "joining message",
    text: "Hello world?",
    html: message,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
