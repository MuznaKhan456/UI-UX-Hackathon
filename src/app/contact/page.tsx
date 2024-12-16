import React from 'react'
import Image from 'next/image'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { TbMailFilled } from 'react-icons/tb'
import { PiArrowBendRightDownLight } from 'react-icons/pi'

const Contact = () => {
  return (
    <div>
      <div className='bg-white flex justify-between mx-24'>
        <section className='mt-32 mx-20'>
          <h5 className=''>CONTACT US</h5>
          <h2 className='font-bold text-5xl mt-9'>Get in touch<br /> today!</h2>
          <h4 className='text-[#737373] mt-5'>We know how large objects will act, <br />
            but things on a small scale</h4>
          <div className='mt-8'>
            <h5 className='font-bold'>Phone: +451 215 215</h5>
            <h5 className='font-bold'>Fax: +415 215 215</h5>
          </div>
          <p className='flex gap-6 pt-6 '><FaTwitter className='size-6' /><FaFacebook className='size-6' /><FaInstagram className='size-6' /></p>

        </section>
        <section className=''>
          <Image src="/cont.jpg" alt='' width={1100} height={1100} className='w-[600px] h-[700px] ' />
        </section>
      </div>
      <div className='mt-20'>
        <div className='text-center'>
          <h5 >VISIT OUR OFFICE</h5>
          <h2 className='text-5xl font-bold'>We help small businesses<br /> with big ideas</h2>
        </div>

        

        <div className="flex flex-col md:flex-row justify-center items-center p-6">
          {/* Phone Card */}
          <div className="flex flex-col items-center text-center border border-gray-200  px-6 py-12 shadow-md">
            <div className="text-blue-500 text-4xl mb-4">
              {/* Phone Icon */}
              <i className="fas fa-phone"><FiPhone className='size-20 text-[#23A6F0]' /></i>
            </div>
            <p className="text-gray-600">georgia.young@example.com</p>
            <p className="text-gray-600">georgia.young@pie.com</p>
            <h3 className="font-semibold text-lg mt-4">Get Support</h3>
            <button className=" mt-2 px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>

          {/* Location Card */}
          <div className="flex flex-col items-center text-center bg-[#252B42] text-white  py-12 px-6 shadow-md">
            <div className="text-blue-300 text-4xl mb-4">
              {/* Location Icon */}
              <i className="fas fa-map-marker-alt"><IoLocationSharp className='size-20 text-[#23A6F0]' /></i>
            </div>
            <p>georgia.young@example.com</p>
            <p>georgia.young@pie.com</p>
            <h3 className="font-semibold text-lg mt-4">Get Support</h3>
            <button className="rounded-full mt-2 px-6 py-2 border border-blue-[#23A6F0] text-blue-300  hover:bg-blue-300 hover:text-blue-[#23A6F0] transition">
              Submit Request
            </button>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center text-center border border-gray-200  px-6 py-12 shadow-md">
            <div className="text-blue-500 text-4xl mb-4">
              {/* Email Icon */}
              <i className="fas fa-envelope"><TbMailFilled className='size-20 text-[#23A6F0]'/></i>
         </div>
        <p className="text-gray-600">georgia.young@example.com</p>
        <p className="text-gray-600">georgia.young@pie.com</p>
        <h3 className="font-semibold text-lg mt-4">Get Support</h3>
        <button className=" mt-2 px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
          Submit Request
        </button>
      </div>
      </div>
            <div className='text-center py-20  '>
             
              <PiArrowBendRightDownLight className='size-20 mx-auto text-[#23A6F0]' />
           
                <h4 className='mt-10'>WE CAN&#39;T WANT TO MEET YOU</h4>
                <h3 className='text-6xl mt-4 font-bold'>Let&#39;s Talk</h3>
                <button className='text-white bg-primary2 rounded-sm py-2 px-4 mt-9'>Try it free now</button>
            </div>
          </div>
          </div>
          )
}

          export default Contact;