"use client";
import React, { useEffect, useState } from "react";
import SubmissionCard from "./SubmissionCard";

interface FormData {
  name: string;
  phone: string;
  email: string;
  programme: string;
}

const programmes = [
  "Online BBA - Bachelor of Business Administration",
  "Online MBA - Master of Business Administration",
  "Online MCA - Master of Computer Applications",
  "Online BCA - Bachelor of Computer Applications",
  "Online B.Com - Bachelor of Commerce",
  "Online M.Com - Master of Commerce",
  "Online BA - Bachelor of Arts",
  "Online MA - Master of Arts",
  "Online B.Sc - Bachelor of Science",
  "Online M.Sc - Master of Science",
];

const EnquiryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    programme: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (formSubmitted) {
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          programme: "",
        });
      }, 2000);
    }
  }, [formSubmitted]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
  };

  return (
    <>
      {formSubmitted && <SubmissionCard />}
<div id="enquiry-form" className="bg-red-600 p-8 rounded-3xl max-w-md mx-auto">
        <h2 className="text-white text-center text-2xl font-bold mb-6">
          Enquire Now for C.U DISTANCE EDUCATION & ONLINE PROGRAM
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-md"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md"
            required
          />

          <select
            name="programme"
            value={formData.programme}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-gray-600"
            required
          >
            <option value="">-- Select Programme --</option>
            {programmes.map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-white text-gray-800 p-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default EnquiryForm;
