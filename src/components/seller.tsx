import React from 'react'
import Image from 'next/image'

// import { FaCircle } from 'react-icons/fa'
import Items from './items'

const Seller = () => {
  return (
    <div>
        <div className='text-center pt-20 mx-16 md:mx-0'>
            <h3 className='font-bold text-3xl md:text-4xl'>BESTSELLER PRODUCTS</h3>
            <p className='text-[#737373] font-semibold mt-6 mx-16 md:mx-0'>Problems trying to resolve the conflict between  </p>
        </div>
         <Items/>
            
                 <div className='bg-[#23856D] mt-10 md:mt-40 bg-cover bg-center h-screen  md:flex '>
                    <section className='text-white text-center md:text-left md:mt-56 md:ml-60 mx-32 md:mx-0 pt-20 md:pt-0'>
                        <h5 className='font-semibold'>SUMMER 2020</h5>
                        <h1 className='text-4xl md:text-6xl mt-10 font-bold'>Vita Classic<br/>Product</h1>
                        <h4 className='mt-4 font-semibold'>We know how large objects will act, We know <br/> how are objects will act, We know</h4>
                        <div className='text-white md:flex gap-6 mt-8'>
                            <h5 className='font-bold mt-3 text-2xl'>$16.48</h5>
                        <button className='bg-primary rounded-md py-3 px-6 font-semibold mt-5 md:mt-0'>ADD TO CART</button>
                        </div>
                    </section>
                    <section className=''>
                <Image src="/picture1.png" alt="" width={1000} height={1000} className='h-60 md:h-[685px] w-60 md:w-[443px] mt-1 md:ml-96'/>
                </section>
                 </div>

                 <div className='md:flex'>
                    <section>
                        <Image src="/asian.jpg" alt="" width={1000} height={1000} className='w-[725px] h-[774px]' />
                    </section>
                    <section className='pt-52  ml-20'>
                        <h5 className='text-[#BDBDBD]'>SUMMER 2020</h5>
                        <h2 className='text-5xl mt-9 font-bold '>Part of the Neural<br/> Universe</h2>
                        <h4 className='mt-8'>We know how large objects will act, <br/> but things on a small scale.</h4>
                       
                        <div className='flex gap-2 mt-6'>
                        <button className='bg-primary rounded-md py-3 px-8 text-white'>BUY NOW</button>
                        <button className=' border-2   border-primary rounded-md py-3 px-6 text-primary'>READ MORE</button>
                        </div>
                    </section>
                 </div>
            
    </div>
  )
}

export default Seller