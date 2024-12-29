import React from 'react'
import Image from 'next/image'

// import { FaCircle } from 'react-icons/fa'
import Items from './items'

const Seller = () => {
  return (
    <div>
        <div className='text-center pt-20 mx-4 md:mx-0'>
            <h3 className='font-bold text-3xl md:text-4xl'>BESTSELLER PRODUCTS</h3>
            <p className='text-[#737373] font-semibold mt-3 md:mt-6'>Problems trying to resolve the conflict between  </p>
        </div>
         <Items/>
            
                 <div className='bg-[#23856D] mt-8 md:mt-40 bg-cover bg-center h-full  md:flex '>
                    <section className='text-white text-center md:text-left md:mt-56 ml-2 md:ml-60 mx-4 md:mx-0 pt-10 md:pt-0'>
                        <h5 className='font-semibold'>SUMMER 2020</h5>
                        <h1 className='text-4xl md:text-6xl mt-10 font-bold'>Vita Classic<br/>Product</h1>
                        <h4 className='mt-4 font-semibold'>We know how large objects will act, We know <br/> how are objects will act, We know</h4>
                        <div className='text-white md:flex gap-6 mt-8'>
                            <h5 className='font-bold mt-3 text-2xl'>$16.48</h5>
                        <button className='bg-primary rounded-md py-3 px-6 font-semibold mt-3 md:mt-0'>ADD TO CART</button>
                        </div>
                    </section>
                    <section className=''>
                <Image src="/picture1.png" alt="" width={1000} height={1000} className='h-68 md:h-[650px] w-68 md:w-[460px] mt-4 md:mt-16 ml-0 md:ml-96'/>
                </section>
                 </div>

                 <div className='md:flex mx-4 md:mx-0'>
                    <section>
                        <Image src="/asian.jpg" alt="" width={1000} height={1000} className='w-[600px] md:w-[800px] h-[400px] md:h-[774px]' />
                    </section>
                    <section className='pt-10 md:pt-52  mx-4 md:mx-28 text-center md:text-justify'>
                        <h5 className='text-[#BDBDBD]'>SUMMER 2020</h5>
                        <h2 className='text-3xl md:text-7xl mr-9 mt-9 font-bold '>Part of the Neural Universe</h2>
                        <h4 className='mt-8 text-sm md:text-2xl'>We know how large objects will act,  but things on a small scale.</h4>
                       
                        <div className='md:flex gap-2 mt-6'>
                        <button className='bg-primary2 md:bg-primary rounded-md py-3 px-9 text-white'>BUY NOW</button>
                        <button className=' border-2 border-primary2 md:border-primary rounded-md py-3 px-6 mt-3 md:mt-0 text-primary2 md:text-primary'>READ MORE</button>
                        </div>
                    </section>
                 </div>
            
    </div>
  )
}

export default Seller