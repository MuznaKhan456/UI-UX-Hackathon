import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';

import { IoCartOutline, IoHeartOutline, IoSearch } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { BiMenuAltRight } from "react-icons/bi";


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
            <div className="flex gap-24 md:gap-20  pt-6 py-6 border-b-2 mx-3 md:mx-16 ">
                <h1 className="text-2xl md:text-4xl font-bold pt-4">Bandage</h1>
                <nav>
                <ul className=" hidden md:flex gap-7 pt-7 mx-20">
                    <li><Link href="/">Home</Link></li>
                       <li><Link href="/shop" >Shop</Link> </li>
                       <li><Link href="/about">About</Link></li>                                                
                        <li><Link href="/product.m">Product</Link></li>                        
                        <li><Link href="/pricing">Pricing</Link></li>                        
                        <li> <Link href="/contact">Contact</Link></li>
                        <li> <Link href="/pages">Pages</Link></li>
                  </ul>
                  </nav>

 
                  <div className='hidden md:flex  text-[#23A6F0] mt-6 pl-9 md:pl-20 gap-2 '>
                  <p className='pt-1 '><BsPerson /></p>
                  <Link href="/login/register ">Login / Register</Link>
               </div>
               <div className=' flex  md:gap-4 -ml-20 md:-ml-2'>
               <IoSearch className="mt-6 size-6 md:text-[#23A6F0]" />
              <IoCartOutline className=" size-6 mt-6 md:text-[#23A6F0]"/>
              <IoHeartOutline className="hidden md:block size-6 mt-6 text-[#23A6F0]"/>
              <Sheet>
  <SheetTrigger className=" md:hidden">
  <BiMenuAltRight className="mt-5 size-6" />
  </SheetTrigger>
  <SheetContent className="w-80 h-60 text-center">
                  <ul>
                      <li><Link href="/">Home</Link></li>
                       <li><Link href="/shop" >Shop</Link> </li>
                       <li><Link href="/about">About</Link></li>                                               
                        <li><Link href="/product.m">Product</Link></li>                        
                        <li><Link href="/pricing">Pricing</Link></li>                        
                        <li> <Link href="/contact">Contact</Link></li>
                        <li> <Link href="/pages">Pages</Link></li>
                  </ul>
             
  </SheetContent>
</Sheet>
              </div>
            </div>
        </section>
     </div>
    )
  };
  
  ;