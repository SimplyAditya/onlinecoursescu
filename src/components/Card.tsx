import React from "react";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  subheading: string;
  iconSrc: string;
}

const Card: React.FC<CourseCardProps> = ({ title, subheading, iconSrc }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-sm">
      <div className="flex justify-between items-start">
        <div className="space-y-2 max-w-72">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-base">{subheading}</p>
        </div>
        <div className="relative w-16 h-16">
          <Image src={iconSrc} alt={`${title} icon`} fill className="h-full" />
        </div>
      </div>
      <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-base">
        Know More
      </button>
    </div>
  );
};

export default Card;
