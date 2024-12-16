
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';

import { IoCartOutline, IoHeartOutline, IoSearch } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';


export default function Header(){
    return (
      <div>
         <section className=' hidden md:flex bg-[#252B42] text-white py-4 justify-evenly '>
               <div className='flex gap-2'>
                <p className='pt-1'><FiPhone /></p>
               <p>(225)555-0118</p>
               </div>
               <div className='flex gap-2'>
                <p className='pt-1'><TfiEmail /></p>
                <p>michelle.rivera@example.com</p>
                </div>
               <div>Follow US and get a chance to win 80% off</div>
               <div className='flex gap-2'>
                <p>Follow Us : </p>
                <p className='flex gap-2 pt-1'><FaInstagram /><FaYoutube /><FaFacebook /><FaTwitter /></p>
                </div>
        </section>
          <section>
            <div className="flex gap-32  md:gap-20  pt-6 py-6 border-b-2 mx-3 md:mx-16 ">
                <h1 className="text-2xl md:text-4xl font-bold pt-4">Bandage</h1>
                <nav>
                <ul className=" hidden md:flex gap-7 pt-7 mx-20">
                    <li><Link href="/">Home</Link></li>
                       <li><Link href="/shop" >Shop</Link> </li>
                       <li><Link href="/about">About</Link></li>                        
                        <li><Link href="/blog">Blog</Link></li>                        
                        <li><Link href="/product">Product</Link></li>                        
                        <li><Link href="/pricing">Pricing</Link></li>                        
                        <li> <Link href="/contact">Contact</Link></li>
                        <li> <Link href="/pages">Pages</Link></li>
                  </ul>
                  </nav>
                  <div className='hidden md:flex  text-[#23A6F0] mt-6 pl-52 gap-2 '>
                  <p className='pt-1 '><BsPerson /></p>
                  <Link href="/login/register ">Login/Register</Link>
               </div>
               <div className=' flex gap-8 -ml-8'>
               <IoSearch className="mt-6 size-6  text-[#23A6F0]" />
              <IoCartOutline className=" size-6 mt-6 text-[#23A6F0]"/>
              <IoHeartOutline className="hidden md: size-6 mt-6 text-[#23A6F0]"/>
              </div>
            </div>
        </section>
     </div>
    )
  };
  
  