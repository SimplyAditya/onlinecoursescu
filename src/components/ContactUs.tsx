"use client";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="h-auto bg-white text-lg flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-4xl font-bold text-red-600 pb-4">
        Contact Us
      </h1>
      <h2 className="text-sm lg:text-xl font-light text-black">Get Started</h2>
      <h3 className="text-sm lg:text-xl font-light text-black px-4 text-center">
        Enter your details and our experts will get in touch with you shortly!
      </h3>
      <div className="flex justify-center items-center gap-2">
        <h3 className="text-sm lg:text-xl font-light text-black">
          Call for Admissions
        </h3>
        <h3 className="text-sm lg:text-xl font-semibold text-red-600">
          9316317700
        </h3>
      </div>
      <div className="flex justify-center items-center gap-2 pb-8">
        <h3 className="text-sm lg:text-xl font-light text-black">Email</h3>
        <Link
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=chandigarhonlineuniversity727@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm lg:text-xl font-semibold text-red-600"
        >
          chandigarhonlineuniversity727@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
