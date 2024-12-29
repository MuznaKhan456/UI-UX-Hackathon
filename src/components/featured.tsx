import React from 'react'
import Image from 'next/image'
// import unsplash1 from '../public/unsplash1.jpg'
// import unsplash2 from '../public/unsplash2.jpg'
// import unsplash3 from '../public/unsplash3.jpg'
import { LuAlarmClock } from 'react-icons/lu'
import { FaCommentDots } from 'react-icons/fa'

const Featured = () => {
  return (
    <div>
        <div className='mt-20 text-center '>
            <h6 className='text-primary2 '>Practice Advice</h6>
            <h2 className='text-5xl mt-8'>Featured Posts</h2>
            <p className='text-[#737373] mt-6'>Problems trying to resolve the conflict between <br/>
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 mx-4 md:mx-44 '>
              <div className='shadow-md  '>
              <div className=''>
                <div><Image src="/unsplash1.jpg" alt="" width={1000} height={1000} className=''/></div>
                </div>
                <div className='px-3'>
              <ul className='flex gap-8 mt-6 '>
            
                   <li className='text-primary2'>Google</li> 
                    <li className='#737373'>Trendind</li>
                    <li className='#737373'>New</li>
            
              </ul>
              <h4 className='mt-4 '>Loudest a la Madison #1<br/> (L&#39;integral)</h4> 
               <p className='mt-4 text-[#737373]'>We focus on ergonomics and meeting  ou where you work. It&#39;s only a   keystroke away.</p>
             <div className='flex gap-16 md:gap-28 mt-8'>
                <p className='flex gap-2 text-xs md:text-sm text-[#737373]'><LuAlarmClock className='mt-1 text-primary2'/>22 April 2021</p>
                <p className='flex gap-2 text-xs md:text-sm text-[#737373]'><FaCommentDots className='mt-1 text-primary'/>10 comments</p>
            </div>
            <div className='font-semibold py-4 text-[#737373]'>
                Learn More
               </div>
               </div>
            </div>
         

          <div className='shadow-md '>
                <div><Image src="/unsplash2.jpg" alt="" width={1000} height={1000} className=''/></div>
                <div className='px-3'>
              <ul className='flex gap-8 mt-6'>
            
                   <li className='text-primary2'>Google</li> 
                    <li className='#737373'>Trendind</li>
                    <li className='#737373'>New</li>
            
              </ul>
              <h4 className='mt-4'>Loudest a la Madison #1<br/> (L&#39;integral)</h4> 
               <p className='mt-4 text-[#737373]'>We focus on ergonomics and meeting  ou where you work. It&#39;s only a   keystroke away.</p>
             <div className='flex gap-16 md:gap-28 mt-8'>
                <p className='flex gap-2 text-xs md:text-sm text-[#737373]'><LuAlarmClock className='mt-1 text-primary2'/>22 April 2021</p>
                <p className='flex gap-2 text-xs md:text-sm text-[#737373]'><FaCommentDots className='mt-1 text-primary'/>10 comments</p>
            </div>
            <div className='font-semibold py-4 text-[#737373]'>
                Learn More
               </div>
             </div>
            </div>

            <div className='shadow-md '>
                <div><Image src="/unsplash3.jpg" alt="" width={1000} height={1000} className=''/></div>
                <div className='px-3'>
              <ul className='flex gap-8 mt-6'>
            
                   <li className='text-primary2'>Google</li> 
                    <li className='#737373'>Trendind</li>
                    <li className='#737373'>New</li>
            
              </ul>
              <h4 className='mt-4'>Loudest a la Madison #1<br/> (L&#39;integral)</h4> 
               <p className='mt-4 text-[#737373]'>We focus on ergonomics and meeting  ou where you work. It&#39;s only a  keystroke away.</p>
             <div className='flex gap-16 md:gap-28 mt-8'>
                <p className='flex gap-2 text-xs md:text-sm text-[#737373]'><LuAlarmClock className='mt-1 text-primary2'/>22 April 2021</p>
                <p className='flex gap-2 text-sm md:text-sm text-[#737373]'><FaCommentDots className='mt-1  text-primary'/>10 comments</p>
            </div>
            <div className='font-semibold py-4 text-[#737373]'>
                Learn More
               </div>
             </div>
            </div>
          </div>
    </div>
  )
}

export default Featured