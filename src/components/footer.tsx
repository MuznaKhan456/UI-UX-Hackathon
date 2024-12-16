import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-6'>
    <div className='bg-[#FAFAFA] md:flex justify-between px-20 mt-10 py-12'>
    <h3 className='font-bold text-2xl '>Bandage</h3>
    <div>
    <p className='flex gap-6 pt-1 text-primary2'><FaFacebook className='size-6'/><FaInstagram className='size-6'/><FaTwitter className='size-6'/></p>
    </div>
</div>

    <div className='md:flex bg-white text-black gap-20 mx-16'>
      
      <div >
      <h2 className='font-semibold py-4 text-2xl'>Company Info</h2>
        <ul className='text-[#737373]'>
            <li>About US</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
        </ul>
      </div>
      <div>
      <h3 className='font-semibold py-4 text-2xl'>Legal</h3>
        <ul className='text-[#737373]'>
            <li>About US</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
        </ul>
      </div>
      <div>
      <h3 className='font-semibold py-4 text-2xl'>Features</h3>
        <ul className='text-[#737373]'>
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
        </ul>
      </div>
      <div>
      <h3 className='font-semibold py-4 text-2xl'>Resources</h3>
        <ul className='text-[#737373]'>
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
        </ul>
      </div>
      <div>
        <h3 className='font-semibold py-4 text-2xl'>Get In Touch</h3>
       <input type="text" placeholder='Your Email' className='bg-slate-200 rounded-sm py-2 px-6'>
       </input>
       <button className='text-white bg-primary2 rounded-sm py-2 px-4'>Subscribe</button>
       <p className='text-[#737373]'>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    </div>
    <div className='text-[#737373] bg-[#FAFAFA] mt-8 py-4'>
    <p className='mx-16'>Made With Love By Finland All Right Reserved</p>
    </div>
  </div >
  )
}

export default Footer
