
import Brand from '../../components/brand'
import PricingCard from '../../components/card'
import { FaCircle, FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'

// import { FaCircle, FaFacebookSquare, FaLinkedin, FaToggleOff, FaTwitter } from 'react-icons/fa'

// import { FaCircleCheck, FaRegCircleCheck } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io5'

const Pricing = () => {
  
  return (
<div className='mt-16'>
<div className='text-center'>
        <p className='text-gray-500 font-semibold mt-8'>PRICING</p>
        <h3 className='text-5xl font-bold  p-14'>Simple Pricing</h3>
        <p className='text-gray-500 font-semibold mb-8'>Home / Pricing</p>
      </div>
<div className="text-center py-10  bg-[#FAFAFA]">
      <h1 className="text-4xl font-bold text-gray-800 mt-10">Pricing</h1>
      <p className="text-gray-600 mt-4">
      Problems trying to resolve the conflict between <br/>
      the two major realms of Classical physics: Newtonian mechanics 
      </p>

<div className='font-semibold flex gap-8 justify-center py-10'>
    <div className='flex gap-3'>
        <h4>Monthly</h4>
        <button className=' bg-white border border-blue-400 rounded-3xl p-10 py-1'>
        <FaCircle  className='text-[#D0D0D0] -ml-8'/>
        </button>

    </div>
    <div className='flex gap-3'>
       <h4>Yearly</h4> 
       <button className='bg-[#B2E3FF] rounded-full text-[#23A6F0] px-6 py-2 -mt-2'>Save 25%</button>
    </div>
</div>

    </div>
    {/* <div className='  flex  h-auto w-full  p-20 justify-center'>
     

      
        <div className='border border-black h-[450px] rounded-lg px-44 mt-12'>

        </div>
        <div className='   border h-[500px] px-44 border-black bg-[#252B42] rounded-lg w-[px]'>

        </div>
        <div className='border border-black h-[450px] rounded-lg px-44 mt-12'>
        </div>

    
    </div> */}




<PricingCard/>
  
           
           <div className='text-center bg-[#FAFAFA] py-10 '><h4>Trusted By Over 4000 Big Companies</h4></div>
     <div className='-mt-9'><Brand/></div>



        <div className="min-h-screen flex flex-col items-center py-10 px-5">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Pricing FAQs</h1>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 mt-16 md:grid-cols-3 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {Array(6).fill(0).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              <span className="text-blue-500 mr-2">&#8250;</span>the quick fox jumps over the lazy dog
            </h3>
            <p className="text-gray-600 text-sm">
              Met minim Mollie non desert Alamo est sit cliquey<br/> dolor do met sent. RELIT official consequent door ENIM<br/>
              RELIT Mollie. Excitation venial consequent sent <br/>nostrum met.
            </p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-40 text-center">
        <p className="text-gray-600 text-sm">
          Haven&#39;t got your answer?{' '}
          <a
            href="#"
            className="text-blue-500 hover:underline font-medium"
          >
            Contact our support
          </a>
        </p>
      </div>
    </div>

     <div className='text-center py-20  '>
        <h3 className='text-6xl mt-4 font-bold '>Start your 14 days free trial</h3>
        <h4 className='text-[#737373] mt-10'>Met minim Mollie non desert Alamo est sit cliquey dolor<br/> 
          do met sent. RELIT official consequent.</h4>
        <button className='text-white bg-primary2 rounded-sm py-2 px-4 mt-9'>Try it free now</button>
     
  </div>
  <div className='flex gap-4 align-items-center justify-center'>
          <FaTwitter className='text-[#55ACEE] size-6'/>
          <FaFacebookSquare className='text-[#395185] size-6'/>
          <IoLogoInstagram className='text-[] size-6'/>
          <FaLinkedin className='text-[#0A66C2] size-6'/>
        </div>
    
</div>
  )
}

export default Pricing