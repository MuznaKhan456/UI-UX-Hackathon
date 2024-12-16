import { FaCircleCheck } from "react-icons/fa6";

export default function PricingCard  (){
    return(
        <div className="flex flex-col bg-[#FAFAFA] items-center  space-y-8 md:space-y-0 md:flex-row pl-44">

<div className="flex flex-col items-center text-center -mt-1 border border-[#23A6F0] rounded-lg p-6 w-full max-w-sm shadow-md">
<h3 className="text-lg font-semibold ">FREE</h3>
                    <p className="mt-2 text-lg">Organize across all <br/>apps by hand</p>
                    <p className="text-4xl font-bold mt-4 text-[#23A6F0]">0 $</p>
                    <p className="text-blue-300 text-sm">Per Month</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center space-x-2  py-2">
                        <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>Unlimited product updates</span>
                      </li>
                      <li className="flex items-center space-x-2 py-2">
                      <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>Unlimited product updates</span>
                      </li>
                      <li className="flex items-center space-x-2 py-2">
                        <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>Unlimited product updates</span>
                      </li>
                      <li className="flex items-center space-x-2 py-2">
                        <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>1GB Cloud storage</span>
                      </li>
                      <li className="flex items-center space-x-2 py-2">
                        <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>Email and community support</span>
                      </li>
                    </ul>
                    <button className="mt-6 px-14 py-2 border bg-[#252B42] text-white rounded hover:bg-blue-300 hover:text-blue-900 transition">
                      Try for free
                    </button>
        </div>
            {/* Standard Plan */}
                  <div className="flex flex-col items-center text-center h-[560px] bg-[#252B42] text-white rounded-lg p-6 w-full max-w-sm shadow-md ">
                    <h3 className="text-lg font-semibold">STANDARD</h3>
                    <p className="mt-2 text-lg">Organize across all <br/>apps by hand</p>
                    <p className="text-4xl font-bold mt-4 text-[#23A6F0]">9.99 $</p>
                    <p className="text-blue-300 text-sm">Per Month</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center space-x-2  py-2">
                        <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>Unlimited product updates</span>
                      </li>
                      <li className="flex items-center space-x-2 py-2">
                      <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>Unlimited product updates</span>
                      </li>
                      <li className="flex items-center space-x-2 py-2">
                        <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>Unlimited product updates</span>
                      </li>
                      <li className="flex items-center space-x-2 py-2">
                        <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>1GB Cloud storage</span>
                      </li>
                      <li className="flex items-center space-x-2 py-2">
                        <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                        <span>Email and community support</span>
                      </li>
                    </ul>
                    <button className="mt-6 px-14 py-2 border bg-[#23A6F0] text-white rounded hover:bg-blue-300 hover:text-blue-900 transition">
                      Try for free
                    </button>
                  </div>

                     {/* Premium Plan */}
                        
                        <div className="flex flex-col  items-center text-center  border border-[#23A6F0] rounded-lg p-6 w-full max-w-sm shadow-md">
                          <h3 className="text-lg font-semibold ">PREMIUM</h3>
                          <p className="text-gray-600 mt-2 text-lg">Organize across all<br/> apps by hand</p>
                          <p className="text-4xl font-bold mt-4 text-[#23A6F0]">19.99 $</p>
                          <p className="text-gray-400 text-sm">Per Month</p>
                          <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li className="flex items-center space-x-2 py-2">
                              <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                              <span>Unlimited product updates</span>
                            </li>
                            <li className="flex items-center space-x-2 py-2">
                              <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                              <span>Unlimited product updates</span>
                            </li>
                            <li className="flex items-center space-x-2 py-2">
                              <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                              <span>Unlimited product updates</span>
                            </li>
                            <li className="flex items-center space-x-2 py-2">
                              <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                              <span>1GB Cloud storage</span>
                            </li>
                            <li className="flex items-center space-x-2 py-2">
                              <i className="fas fa-check text-green-500"><FaCircleCheck className='size-6' /></i>
                              <span>Email and community support</span>
                            </li>
                          </ul>
                          <button className="mt-6 px-14 py-2  bg-[#23A6F0] text-white rounded hover:bg-blue-500 hover:text-white transition">
                            Try for free
                          </button>
                        </div>
                </div> 
            
    )
}