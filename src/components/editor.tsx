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
            <div className='md:row-span-2 mx-4 md:mx-60 w-[290px] md:w-[510px] h-[400px] md:h-[500px]'>
                 <Image src="/filter1.jpg" alt="" width={1000} height={1000} className='w-[290px] md:w-[510px] h-[400px] md:h-[500px]'/>
                </div>
            <div className='md:row-span-2  mx-4 md:mx-64 w-[290px] md:w-[240px] h-[500px]'>
                 <Image src="/filter2.jpg" alt="" width={1000} height={1000} className='w-[290px] md:w-[240px] h-[500px]'/>
                 </div>
            <div className='md:col-span-1 mx-4 md:mx-0 '>
                 <Image src="/filter3.jpg" alt="" width={1000} height={1000} className='w-[290px] md:w-[240px] md:h-[242px]'/>
                 </div>
            <div className=' md:col-span-1  md:mt-0 mx-4 md:mx-0'> 
                <Image src="/filter4.jpg" alt="" width={1000} height={1000} className='w-[290px] md:w-[240px] md:h-[242px]'/>
                </div>
        
        </div>
    </div>
  )
}

export default Editor;