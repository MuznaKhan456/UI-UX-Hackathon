import React from 'react'
import Image from 'next/image'

const Editor = () => {
  return (
    <div className='bg-[#FAFAFA]'>
        <div className='text-center md:text-center pt-20'>
            <h3 className='font-bold text-4xl'>EDITOR&#39;S PICK</h3>
            <p className='text-[#737373] mt-6'>Problems trying to resolve the conflict between </p>
        </div>
        <div className='grid cols-1 md:grid-cols-3 gap-4 border-black mt-12'>
            <div className='md:row-span-2 w-[400px] md:w-[510px] h-[500px] mx-9 md:mx-60'>
                 <Image src="/filter1.jpg" alt="" width={1000} height={1000} className='md:w-[510px] md:h-[500px]'/>
                </div>
            <div className='md:row-span-2 md:w-[240px] h-[500px] mx-9 md:mx-64 -mt-20 md:-mt-0'>
                 <Image src="/filter2.jpg" alt="" width={1000} height={1000} className='md:w-[240px] h-[500px]'/>
                 </div>
            <div className='md:col-span-1 mx-9 md:mx-0 w-[410px] md:w-[240px] h-[100px] md:h-[242px]'>
                 <Image src="/filter3.jpg" alt="" width={1000} height={1000} className='md:w-[240px] md:h-[242px]'/>
                 </div>
            <div className=' md:col-span-1 md:w-[240px] md:h-[242px] mt-80 md:mt-0 mx-9 md:mx-0'> 
                <Image src="/filter4.jpg" alt="" width={1000} height={1000} className='md:w-[240px] md:h-[242px]'/>
                </div>
        
        </div>
    </div>
  )
}

export default Editor;