import Image from 'next/image'
import React from 'react'

const AboutUsSection = () => {
  return (
    <div>
        <main className='flex items-center justify-center bg-gray-100 text-[#FF0000] font-bold pt-16 pb-4 text-xl md:text-3xl'>
          Collaborating With Industry Leaders
        </main>
        <div className='grid grid-cols-2 md:flex justify-items-center md:justify-center md:items-center bg-gray-100 gap-10'>
            {/* Google image */}
            <Image 
              src='/google.png' 
              alt='google' 
              width={200} 
              height={200} 
              className="w-24 h-24 md:w-[200px] md:h-[200px]" 
            />
            {/* Microsoft image */}
            <Image 
              src='/microsoft.png' 
              alt='microsoft' 
              width={200} 
              height={200} 
              className="w-24 h-24 md:w-[200px] md:h-[200px]" 
            />
            {/* Amazon image */}
            <Image 
              src='/amazon.png' 
              alt='amazon' 
              width={200} 
              height={200} 
              className="w-24 h-24 md:w-[200px] md:h-[200px]" 
            />
            {/* IBM image */}
            <Image 
              src='/ibm.png' 
              alt='ibm' 
              width={150} 
              height={150} 
              className="w-20 h-20 md:w-[150px] md:h-[150px]" 
            />
        </div>
        <div className='grid grid-cols-2 md:flex justify-items-center md:justify-center md:items-center bg-gray-100 gap-10'>
            {/* Google image */}
            <Image 
              src='/hp.png' 
              alt='hp' 
              width={200} 
              height={200} 
              className="w-24 h-24 md:w-[150px] md:h-[150px]" 
            />
            {/* Microsoft image */}
            <Image 
              src='/adobe.png' 
              alt='adobe' 
              width={200} 
              height={200} 
              className="w-24 h-24 md:w-[200px] md:h-[200px]" 
            />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-around pt-10 md:pt-4 md:px-16 bg-[url("/courses_bg.png")] bg-cover bg-center gap-10'>
            <Image src ='/logo.png' alt='logo' width={200} height={200} className="w-200 h-200 md:w-[400px] md:h-[400px] border-red-700 border-8 rounded-full" />
            <div className='max-w-2xl md:min-w-1/3 md:max-w-2xl gap-4 rounded-2xl h-auto bg-white px-10 md:px-4 py-16 opacity-70 backdrop-blur-xl flex flex-col items-start justify-center hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out'>
            <h1 className='text-red-600 font-[800] text-2xl'>
                About Us
            </h1>
            <h2 className='text-black font-[700] text-lg'>
            Lord Ganesha Institute of Management and Technology
            </h2>
            <p>
            Lord Ganesha Institute of Management and Technology is a pioneer in educating the masses since 2009. we have trained 50,000+ students in distance learning and 20,00+ in skilled training. We are an ISO 9001-certified and quality-ensured institute.
            </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUsSection
