"use client"
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-black/20">
      {/* Background Image */}
      <Image
        src="/hero_section_image.png"
        alt="University Campus"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-red-600 leading-tight mb-6">
            Empowering Future Leaders in Business & Online Education
          </h1>
          <p className="text-white text-lg lg:text-xl mb-8 max-w-xl">
            We believe in breaking down barriers to education, offering accredited programs 
            that cater to the diverse needs of today's learners. Our expert faculty, cutting-edge 
            technology, and comprehensive support services ensure that you receive a world-class 
            education that aligns with your goals.
          </p>
<button onClick={() => document.getElementById("enquiry-form")?.scrollIntoView({ behavior: 'smooth' })} className="bg-red-600 text-white px-8 py-3 rounded-md text-lg hover:bg-red-700 transition-colors">
  Enroll Now
</button>
        </div>
      </div>

      {/* Students Illustration */}
      <div className="absolute bottom-0 right-0 h-72 lg:h-96 -mb-3.5 opacity-0 md:opacity-100 ">
        <Image
          src="/hero-section-students.png"
          alt="Students"
          width={600}
          height={500}
          className="object-contain me-3.5"
        />
      </div>
    </section>
  );
};

export default HeroSection;
