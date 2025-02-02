import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="bg-[#EAE4E4] shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/cu_logo.png"
                alt="CU Online"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-black px-3 py-2 text-sm font-bold"
              >
                Home
              </Link>
              <Link 
                href="/courses" 
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
              >
                Courses
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
              >
                Contact
              </Link>
              <button className='bg-[#FF0000] text-white px-4 py-2 rounded-md text-sm font-medium'>
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
