import React from 'react'
import Image from 'next/image'

import { HiMiniSquares2X2 } from 'react-icons/hi2'
import { TfiMenuAlt } from 'react-icons/tfi'
import Brand from '@/components/brand'

export default function Shop(){
  return (
    <div>
        <div className='bg-[#FAFAFA] py-12 font-semibold text-3xl px-10'>Shop</div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2 mx-4 md:-0'>
            <div><Image src="/col1.jpg" alt="" width={1000} height={1000}/></div>
            <div><Image src="/col2.jpg" alt="" width={1000} height={1000}/></div>
            <div><Image src="/col3.jpg" alt="" width={1000} height={1000}/></div>
            <div><Image src="/col4.jpg" alt="" width={1000} height={1000}/></div>
            <div><Image src="/col5.jpg" alt="" width={1000} height={1000}/></div>
        </div>

        <div className='text-center md:flex justify-evenly mt-10 '>
            <div><h5 className='py-6 '>Showing all 12 results</h5></div>
            <div className='flex gap-3 '>
                <h5 className='px-14 md: first-letter: md:mt-8'>Views :</h5>
                <button className='shadow-xl px-3 md:px-5 py-3 border-2 rounded-sm bg-white'><HiMiniSquares2X2 /></button>
                <button className='shadow-xl px-3 md:px-5 py-3 border-2 rounded-sm bg-white'><TfiMenuAlt /></button>
            </div>
        

        <div className=' mt-8 '>
       <input type="text" placeholder='Popularity' className='bg-slate-200 rounded-sm py-2 px-2'>
        </input>
        <button className='text-white bg-primary2 rounded-sm py-2 px-4 mx-3'>Filter</button>
        </div>
       </div>
     <Brand/>
    </div>
  )
}

