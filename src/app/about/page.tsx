
import Image from 'next/image'


import Brand from '../../components/brand';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
export default function ProductListing() {

  return (
   <div>
        <div className='bg-white flex justify-between mx-24'>
           <section className='mt-40 mx-20'>
               <h5 className=''>ABOUT COMPANY</h5>
               <h2 className='font-bold text-6xl mt-9'>ABOUT US</h2>
            <h4 className='text-[#737373] mt-5'>We know how large objects will act, <br/>
            but things on a small scale</h4>
            <button className='text-white bg-primary2 rounded-sm py-2 px-4 mt-9'>Get Quote Now</button>
           </section>
           <section className=''>
            <Image src="/none.png" alt='' width={1000} height={1000} className='w-[600px] h-[700px] ' />
           </section>
        </div>
    <div className='flex justify-between mx-40 mt-10'>
        <div>
         <h5 className='text-red-600'>Problems trying</h5>
         <h3 className='font-semibold mt-8'>Met minim Mollie non desert<br/> Alamo est sit cliquey dolor do<br/> met sent.</h3>
        </div>
        <div>
         <p className='text-[#737373] mt-14'>Problems trying to resolve the conflict between the two major realms of <br/> Classical physics: Newtonian mechanics  </p>
        </div>
     </div>

     <div className='flex justify-evenly py-20'>
        <div>
         <h1 className='text-5xl font-bold ml-4'>15K</h1>
         <h5>Happy Customers</h5>
        </div>
        <div>
         <h1 className='text-5xl font-bold '>150K</h1>
         <h5>Monthy Visitors</h5>
        </div>
        <div>
         <h1 className='text-5xl font-bold ml-9'>15</h1>
         <h5 className=''>Countries Worldwide</h5>
        </div>
        <div>
         <h1 className='text-5xl font-bold'>100+</h1>
         <h5>Top Partners</h5>
        </div>
     </div>

     <div className='mx-56'>
      <Image src="/videocard.jpg" alt="" width={1000} height={1000} />
     </div>

     <div className='mt-20 text-center'>
      <h2 className='text-5xl font-bold m-6'>Meet Our Team</h2>
      <p className='text-[#737373] '>Problems trying to resolve the conflict between<br/> 
      the two major realms of Classical physics: Newtonian mechanics </p>
 

<div className='grid grid-cols-3 mx-60 mt-9 gap-4'>
   <div className=' '>
         <Image src="/media1.jpg" alt="" width={1000} height={1000} />
       
         <h5 className='font-bold mt-8'>Username</h5>
         <p className='text-[#737373]'>Profession</p>
         <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
   </div>
   <div className=''>
      <Image src="/media2.jpg" alt="" width={1000} height={1000} />
       
       <h5 className='font-bold mt-8'>Username</h5>
       <p className='text-[#737373]'>Profession</p>
       <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
   </div>
   <div className=' '>
      <Image src="/media3.jpg" alt="" width={1000} height={1000} />
       
       <h5 className='font-bold mt-8'>Username</h5>
       <p className='text-[#737373]'>Profession</p>
       <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
   </div>
</div>



     </div>

     <div className='bg-[#FAFAFA] py-14 mt-10'>
<div className=' text-center mt-20'>
   <h2 className='font-bold text-5xl'>Big Companies Are Here</h2>
   <p>Problems trying to resolve the conflict between<br/> 
   the two major realms of Classical physics: Newtonian mechanics </p>
   </div>
  <Brand/>
      </div>

      <div className='grid grid-cols-5'>
         <div className='col-span-3 bg-primary2 text-white pl-60'>
            <h5 className='font-bold mt-40'>WORK WITH US</h5>
            <h2 className='text-5xl mt-10 font-bold'>Now Let&#39;s grow Yours</h2>
            <p className='mt-6'>The gradual accumulation of information about atomic and<br/> small-scale behavior during the first quarter of the 20th </p>
            <button className='border border-gray-300 rounded-2xl py-2 px-6 mt-6'>Button</button>
         </div>
         <div className='col-span-2 '>
            <Image src="/unsplash.jpg"alt=""width={1000} height={1000} className='h-full w-full'/>
         </div>
         
      </div>
   </div>
  )
}

