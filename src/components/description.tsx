import Image from "next/image"
export default function Description() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 grid-row-1 gap-9 mx-16 mt-16 ">
            {/* Image */}
            <div className="md:col-span-1">
                <Image
                    src="/room.png"
                    alt="Room Decor"
                    width={1000}
                    height={1000}
                    className="rounded-md w-full object-cover"
                />
            </div>
            {/* Description Content */}
           
                <div className=" space-y-3 ml-12">
                    <h2 className="text-xl font-bold">The quick fox jumps over</h2>
                    <p className="text-gray-700">
                        Met minim Mollie non desert Alamo est sit <br />cliquey dolor do met sent.
                        RELIT official <br />consequent door ENIM RELIT Mollie. <br />Excitation venial
                       
                        consequent sent nostrum<br /> met.
                    </p>
                    <p className="text-gray-700">
                        Met minim Mollie non desert Alamo est sit<br /> cliquey dolor do met sent.
                        RELIT official <br />consequent door ENIM RELIT Mollie. <br />Excitation venial
                        consequent sent nostrum<br /> met.
                    </p>
                    <p className="text-gray-700">
                        Met minim Mollie non desert Alamo est sit <br />cliquey dolor do met sent.
                        RELIT official<br /> consequent door ENIM RELIT Mollie. <br />Excitation venial
                        consequent sent nostrum <br />met.
                    </p>
                </div>
              <div className=" px-5">
                    {/* Header Section */}
                    {/* FAQ Sections */}
                    <div className="space-y-8 w-full max-w-4xl">
                        {/* Section 1 */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-8">the quick fox jumps over</h2>
                            <ul className="space-y-4">
                                {Array(4).fill(0).map((_, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <span className="text-blue-500 mr-2">&#8250;</span>
                                        the quick fox jumps over the lazy dog
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-8">the quick fox jumps over</h2>
                            <ul className="space-y-4">
                                {Array(3).fill(0).map((_, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <span className="text-blue-500 mr-2">&#8250;</span>
                                        the quick fox jumps over the lazy dog
                                    </li>
                                ))}
                            </ul>
                          </div>
                    </div>
                 </div> 
            </div>
               

 )
}