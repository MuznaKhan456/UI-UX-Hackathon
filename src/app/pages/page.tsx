import React from 'react'
import Image from 'next/image'
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import PageCard from '../../components/pageCard';

export default function Product() {

 
  return (
    <div>
      <div className='text-center'>
        <p className='text-gray-500 font-semibold r mt-8'>WHAT WE DO</p>
        <h3 className='text-3xl md:text-5xl font-bold  p-5 md:p-14'>Innovation tailored for you</h3>
        <p className='text-gray-500 font-semibold mb-8'>Home / Team</p>
      </div>
    <div className='md:flex w-full gap-3 h-full md:h-[550px]'>
<div className='  w-full h-full md:h-[572px]'>
<Image src="/age1.png" alt="" width={1000} height={1000} className='h-[587px]'/>
</div>
<div className='  w-full h-full md:h-[570px] '>
  <div className='grid grid-cols-2 md:grid-rows-2  gap-3 h-full md:h-[560px] mt-4 md:mt-0 mx-2 md:mx-0'>

    <div className='  '>
    <Image src="/age2.png" alt="" width={1000} height={1000} className='h-full md:md:h-[290px]'/>
    </div>
    <div className='  '>
    <Image src="/age3.png" alt="" width={1000} height={1000} className='h-full md:h-[290px]'/>
    </div>
    <div className='  '> 
    <Image src="/age4.png" alt="" width={1000} height={1000} className='md:mt-5 h-full md:h-[290px]'/>
    </div>
    <div className=' '>
    <Image src="/age5.png" alt="" width={1000} height={1000} className='md:mt-5 h-full md:h-[290px]'/>
    </div>

  </div>

</div>



    </div>
    <div className='md:p-10'>
  <h2 className='text-3xl md:text-5xl font-bold text-center p-6 md:p-28'>Meet Our Team</h2>
</div>

<PageCard/>

  <div className='text-center py-20 mx-5 md:mx-0 '>
        <h3 className='text-4xl md:text-6xl mt-4 font-bold '>Start your 14 days free trial</h3>
        <h4 className='text-[#737373] mt-10'>Met minim Mollie non desert Alamo est sit cliquey dolor<br/> 
          do met sent. RELIT official consequent.</h4>
        <button className='text-white bg-primary2 rounded-sm py-2 px-4 mt-9'>Try it free now</button>
     
  </div>
  <div className='flex gap-9 md:gap-4 align-items-center justify-center -mt-9 md:-mt-0'>
          <FaTwitter className='text-[#55ACEE] size-6'/>
          <FaFacebookSquare className='text-[#395185] size-6'/>
          <IoLogoInstagram className='text-[] size-6'/>
          <FaLinkedin className='text-[#0A66C2] size-6'/>
        </div>
    </div>
  )
}

