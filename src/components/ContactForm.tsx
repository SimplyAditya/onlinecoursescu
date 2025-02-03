import React from "react";
import EnquiryForm from "./Form";

const ContactForm = () => {
  // Function to send email via Gmail using nodemailer
  const sendEmail = async (formData: {
    name: string;
    phone: string;
    email: string;
    programme: string;
  }) => {
    const nodemailer = require("nodemailer");
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `Online Courses CU <chandigarhonlineuniversity727@gmail.com>`,
        pass: `fxjksuogadgiqliv`,
      },
    });
    let mailOptions = {
      from: `Online Courses CU <chandigarhonlineuniversity727@gmail.com>`,
      to: `chandigarhonlineuniversity727@gmail.com`,
      subject: "New Enquiry Details",
      text: `You have received a new enquiry from:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Programme: ${formData.programme}`,
    };
    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) console.error("Error sending email:", error);
      else console.log("Email sent:", info.response);
    });
  };

  return (
    <div className='bg-[url("/contactForm.png")] bg-cover bg-center bg-no-repeat py-10 flex items-start justify-start md:ps-32'>
      <div>
        <EnquiryForm />
      </div>
    </div>
  );
};

export default ContactForm;
