import Image from "next/image"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
export default function PageCard (){
    return(
        <div className='grid grid-cols-3 grid-rows-3 mx-60  gap-6'>
           <div className='text-center'>
                 <Image src="/team1.jpg" alt="" width={1000} height={1000} />
               
                 <h5 className='font-bold mt-8'>Username</h5>
                 <p className='text-[#737373]'>Profession</p>
                 <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
           </div>
           <div className='text-center'>
              <Image src="/team2.jpg" alt="" width={1000} height={1000} />
               
               <h5 className='font-bold mt-8'>Username</h5>
               <p className='text-[#737373]'>Profession</p>
               <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
           </div>
           <div className='text-center'>
              <Image src="/team3.jpg" alt="" width={1000} height={1000} />
               
               <h5 className='font-bold mt-8'>Username</h5>
               <p className='text-[#737373]'>Profession</p>
               <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
           </div>
           <div className='text-center'>
              <Image src="/team4.png" alt="" width={1000} height={1000} />
               
               <h5 className='font-bold mt-8'>Username</h5>
               <p className='text-[#737373]'>Profession</p>
               <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
           </div>
           <div className='text-center'>
              <Image src="/team5.jpg" alt="" width={1000} height={1000} />
               
               <h5 className='font-bold mt-8'>Username</h5>
               <p className='text-[#737373]'>Profession</p>
               <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
           </div>
           <div className='text-center'>
              <Image src="/team6.jpg" alt="" width={1000} height={1000} />
               
               <h5 className='font-bold mt-8'>Username</h5>
               <p className='text-[#737373]'>Profession</p>
               <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
           </div>
           <div className='text-center'>
              <Image src="/team7.png" alt="" width={1000} height={1000} />
               
               <h5 className='font-bold mt-8'>Username</h5>
               <p className='text-[#737373]'>Profession</p>
               <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
           </div>
           <div className='text-center'>
              <Image src="/team8.jpg" alt="" width={1000} height={1000} />
               
               <h5 className='font-bold mt-8'>Username</h5>
               <p className='text-[#737373]'>Profession</p>
               <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
           </div>
           <div className='text-center'>
              <Image src="/team9.png" alt="" width={1000} height={1000} />
               
               <h5 className='font-bold mt-8'>Username</h5>
               <p className='text-[#737373]'>Profession</p>
               <p className="flex justify-center gap-2 py-3 "><FaFacebook className="text-[#23A6F0] size-6"/><FaInstagram className="text-[#23A6F0] size-6"/><FaTwitter className="text-[#23A6F0] size-6"/></p>
           </div>

        </div>
    )
}