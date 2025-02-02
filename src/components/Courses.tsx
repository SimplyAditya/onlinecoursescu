import React from "react";
import Card from "./Card";

const Courses = () => {
  const PGCourses = [
    {
      heading: " Online MBA",
      subHeading: "Master of Business Administration General",
    },
    {
      heading: " Online MCA",
      subHeading: "Master of Computer Application Program",
    },
    {
      heading: " Online M.Sc",
      subHeading: "Master of Science",
    },
    {
      heading: " Online M.Com",
      subHeading: "Master of Commerce",
    },
    {
      heading: " Online MA",
      subHeading: "Master of Arts",
    },
  ];

  const UGCourses = [
    {
      heading: " Online BBA",
      subHeading: "Bachelor of Business Administration",
    },
    {
      heading: " Online BCA",
      subHeading: "Bachelor of Computer Application Program",
    },
    {
      heading: " Online B.Sc",
      subHeading: "Bachelor of Science",
    },
    {
      heading: " Online B.Com",
      subHeading: "Bachelor of Commerce",
    },
    {
      heading: " Online BA",
      subHeading: "Bachelor of Arts",
    },
  ];

  const imagesSrc= [
    "/Presentation.png",
    "/Education.png",
    "/Faculty.png",
    "/Video.png",
    "/Audiobook.png"
  ]

  return (
    <div className='w-full h-auto bg-[url("/courses_bg.png")] bg-cover bg-center flex flex-col items-center justify-center text-black font-bold text-3xl p-10'>
      <div className="w-5/6 flex flex-col items-start justify-center text-4xl text-red-600 gap-4 pb-8">
        Courses
        <p className="text-lg text-black font-normal text-justify">
          Chandigarh University offers Distance and Online UG/PG programs with
          industry-focused courses, flexible learning options (live/recorded
          lectures), and an affordable fee structure. Our Skilling Center
          supports students in exploring various career paths while providing
          placement assistance. Choose from a range of specializations and gain
          practical knowledge to excel in leadership roles.
        </p>
      </div>
      <h1 className="text-4xl text-black font-bold py-8">
        Postgraduate Courses
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {PGCourses.map((course, index) => (
        <Card
          key={index}
          title={course.heading}
          subheading={course.subHeading}
          iconSrc={imagesSrc[index]}
        />
      ))}
      </div>
      <h1 className="text-4xl text-black font-bold py-8">
        Undergraduate Courses
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {UGCourses.map((course, index) => (
        <Card
          key={index}
          title={course.heading}
          subheading={course.subHeading}
          iconSrc={imagesSrc[index]}
        />
      ))}
      </div>
    </div>
  );
};

export default Courses;
