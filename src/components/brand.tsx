import Image from 'next/image'
export default function Brand (){
    return (
            <div className='bg-[#FAFAFA] px-28  md:flex justify-evenly py-12 md:py-9 mt-9'>
                    <Image src="/brand1.png" alt="" width={100} height={100} className='w-[103px] h-[34px] my-12'/>
                    <Image src="/brand2.png" alt="" width={100} height={100} className='w-[83px] h-[59px] my-12'/>
                    <Image src="/brand3.png" alt="" width={100} height={100} className='w-[103px] h-[75px] my-2'/>
                    <Image src="/brand4.png" alt="" width={100} height={100} className='w-[103px] h-[42px] my-12'/>
                    <Image src="/brand5.png" alt="" width={100} height={100} className='w-[104px] h-[62px] my-12'/>
                    <Image src="/brand6.png" alt="" width={100} height={100} className='w-[76px] h-[72px] my-12'/>
                </div>
    )
}