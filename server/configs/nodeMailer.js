import nodemailer from 'nodemailer'

//create a transporter object using the smtp
// const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "",
    pass: "",
  },
});

const sendEmail=async({to,subject,body})=>{
    const response=await transporter.sendMail({
     from: '',
     to,
     subject,
     htm:body,

    })
    return response
}
export default sendEmail