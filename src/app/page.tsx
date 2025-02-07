import React from 'react'
import Link from 'next/link';

import Editor from '../components/editor';
import Seller from '../components/seller';
import Featured from '../components/featured';
import Blog from './blog/page';


const Home = () => {
  return (
    <div className='max-w-screen-2xl'>
      <div className=" bg-cover bg-center h-screen " style={{ backgroundImage: "url(/shop.jpg)"}}>
      <div className='font-semibold text-center md:text-justify pl-0 md:pl-72'>
         <h5 className='text-white pt-28 md:pt-60'>SUMMER 2020</h5>
         <h1 className='text-white text-3xl md:text-5xl font-bold pt-10'>NEW COLLECTION</h1>
         <h4 className='text-white pt-10'>We know how large objects will act,<br/>but things on a scale.</h4>
         <Link href="/blog"><button className='hover:scale-105 transition duration-300 py-3 px-12 rounded-sm bg-primary text-white font-bold mt-[28px]'>SHOP NOW</button></Link>
      </div>
      </div>
      <Editor/>
      <Blog />
      <Seller/>
      <Featured/>
   
    </div>
  )
}

export default Home;