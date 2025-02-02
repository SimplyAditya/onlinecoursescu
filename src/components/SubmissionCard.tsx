import Image from "next/image";
import React from "react";

const SubmissionCard = () => {
  return (
    <div className="w-4/6 md:w-2/6 bg-white border-2 border-[#FF0000] py-4 px-8 flex flex-col items-center justify-center gap-4 text-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image src="/cu_logo.png" width={120} height={40} alt="cu logo" />
      <Image src={"/thumbs_up.png"} width={100} height={100} alt="success" />
      <h1 className="text-xl font-bold text-red-600">🎉 Thank You !</h1>
      <h2 className="text-lg font-light text-black">
        Your form has been successfully submitted.
      </h2>
      <p className="text-center text-lg font-light text-black">
        Our team of experts will contact you shortly to guide you through the
        next steps.
      </p>
    </div>
  );
};

export default SubmissionCard;
