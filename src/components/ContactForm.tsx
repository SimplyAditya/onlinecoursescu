import React from 'react'
import EnquiryForm from './Form'

const ContactForm = () => {
  return (
    <>
    <div className='bg-[url("/contactForm.png")] bg-cover bg-center bg-no-repeat py-10 flex items-start justify-start md:ps-32'>
    <div>
        <EnquiryForm />
    </div>
    </div>
    </>
  )
}

export default ContactForm
