import Image from "next/image"
export default function ProductCard (){
    return(
        <div className='grid grid-cols-4 grid-rows-2 mt-8  gap-6'>
                   <div className='text-center'>
                         <Image src="/cover1.jpg" alt="" width={1000} height={1000} />
                       
                         <h5 className='font-bold mt-8'>Graphic Design</h5>
                         <p className='text-[#737373]'>English Department</p>
                         <p className="text-[#23856D]"><span className="text-[#BDBDBD]">$16.48</span> $6.48</p>
                    </div>
                    <div className='text-center'>
                         <Image src="/cover2.jpg" alt="" width={1000} height={1000} />
                       
                         <h5 className='font-bold mt-8'>Graphic Design</h5>
                         <p className='text-[#737373]'>English Department</p>
                         <p className="text-[#23856D]"><span className="text-[#BDBDBD]">$16.48</span> $6.48</p>
                    </div>
                    <div className='text-center'>
                         <Image src="/cover3.jpg" alt="" width={1000} height={1000} />
                       
                         <h5 className='font-bold mt-8'>Graphic Design</h5>
                         <p className='text-[#737373]'>English Department</p>
                         <p className="text-[#23856D]"><span className="text-[#BDBDBD]">$16.48</span> $6.48</p>
                    </div>
                    <div className='text-center'>
                         <Image src="/cover4.jpg" alt="" width={1000} height={1000} />
                       
                         <h5 className='font-bold mt-8'>Graphic Design</h5>
                         <p className='text-[#737373]'>English Department</p>
                         <p className="text-[#23856D]"><span className="text-[#BDBDBD]">$16.48</span> $6.48</p>
                    </div>
                    <div className='text-center'>
                         <Image src="/cover5.jpg" alt="" width={1000} height={1000} />
                       
                         <h5 className='font-bold mt-8'>Graphic Design</h5>
                         <p className='text-[#737373]'>English Department</p>
                         <p className="text-[#23856D]"><span className="text-[#BDBDBD]">$16.48</span> $6.48</p>
                    </div>
                    <div className='text-center'>
                         <Image src="/cover6.jpg" alt="" width={1000} height={1000} />
                       
                         <h5 className='font-bold mt-8'>Graphic Design</h5>
                         <p className='text-[#737373]'>English Department</p>
                         <p className="text-[#23856D]"><span className="text-[#BDBDBD]">$16.48</span> $6.48</p>
                    </div>
                    <div className='text-center'>
                         <Image src="/cover7.jpg" alt="" width={1000} height={1000} />
                       
                         <h5 className='font-bold mt-8'>Graphic Design</h5>
                         <p className='text-[#737373]'>English Department</p>
                         <p className="text-[#23856D]"><span className="text-[#BDBDBD]">$16.48</span> $6.48</p>
                    </div>
                    <div className='text-center'>
                         <Image src="/cover8.jpg" alt="" width={1000} height={1000} />
                       
                         <h5 className='font-bold mt-8'>Graphic Design</h5>
                         <p className='text-[#737373]'>English Department</p>
                         <p className="text-[#23856D]"><span className="text-[#BDBDBD]">$16.48</span> $6.48</p>
                    </div>
        </div>
    )
}