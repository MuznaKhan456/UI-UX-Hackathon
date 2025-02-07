
"use client";
import Image from 'next/image';
import Link from 'next/link';
import Brand from '../../components/brand';
import Description from '../../components/description';

import { useState } from 'react';
import ProductCard from '../../components/productCard';
export default function ProductListing() {
  
    const [selectedImage, setSelectedImage] = useState('/public/single.jpg'); // Example image paths
    const productImages = ['/public/single1.jpg', '/public/single2.jpg'];

    return (
        <div className="md:block container md:mx-auto p-4">
            {/* Breadcrumb */}
            <nav className="text-gray-600 mb-4">
                <ol className="list-reset flex">
                    <li>
                        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                    </li>
                    <li>
                        <span className="mx-2">/</span>
                        <a href="/shop" className="text-blue-600 hover:underline">Shop</a>
                    </li>
                </ol>
            </nav>

            {/* Product Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div>
                    <div className="mb-4">
                        <Image src={'/single.jpg'} alt="Product Image" width={1000} height={1000} className="rounded-md w-full object-cover"/>
                    </div>
                    <div className="flex space-x-2">
                        {productImages.map((image, index) => (
                            <Image
                                key={index}
                                src={'/single1.jpg'}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setSelectedImage('/single.jpg')}
                                width={1000}
                                height={1000}
                                className={`h-16 w-16 rounded-md cursor-pointer border-2 ${selectedImage === image
                                    ? 'border-blue-500'
                                    : 'border-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div>
                    <h1 className="text-2xl font-semibold mb-2 mt-6">Floating Phone</h1>
                    <div className="flex items-center space-x-2 mb-4 ">
                        <span className="text-yellow-500 ">★★★★★</span>
                        <span className="text-gray-500">10 Reviews</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-4">$1,139.33</p>
                    <p className="text-gray-600 mb-4 mt-4">Availability: <span className="text-green-600">In Stock</span></p>
                    <p className="text-gray-700 mb-4 border-b-2 pb-12 mt-12">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                        consequent sent nostrum met.
                    </p>

                    {/* Color Options */}
                    <div className="flex items-center space-x-3 mb-4 mt-12">
                        <div className="h-6 w-6 rounded-full bg-blue-500 cursor-pointer"></div>
                        <div className="h-6 w-6 rounded-full bg-red-500 cursor-pointer"></div>
                        <div className="h-6 w-6 rounded-full bg-green-500 cursor-pointer"></div>
                        <div className="h-6 w-6 rounded-full bg-black cursor-pointer"></div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-20">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Select Options</button>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">❤</button>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">👁</button>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="border-b border-gray-200 mb-4">
                    <nav className="flex space-x-1 md:space-x-4" aria-label="Tabs">
                        <button className="text-xs md:text-base px-4 py-2 text-gray-700 border-b-2 border-blue-600">Description</button>
                        <button className="text-xs md:text-base px-4 py-2 text-gray-500 hover:text-gray-700">Additional Information</button>
                        <button className="text-xs md:text-base px-4 py-2 text-gray-500 hover:text-gray-700">Reviews (0)</button>
                    </nav>
                </div>

                <Description />


                <div className=' '>
                    <h3 className='text-4xl font-bold py-14 text-gray-600 border-b-2'>BESTSELLER PRODUCTS</h3>
               

                    <ProductCard/>
                </div>

                <Brand />


            </div >
        </div >
    );
}
