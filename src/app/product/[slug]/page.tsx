import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";

interface ProductPageProps {
    params : Promise <{slug : string}>
}

async function getProduct(slug : string) : Promise<Product  > {
    return client.fetch(
    groq`* [_type == "product" && slug.current == $slug][0] {
    _id,
    title,
     "slug": slug.current,
    description,
     productImage,
      price,
      tags,
      discountPercentage,
      isNew
  
}`, {slug}

 )
}

export default async function ProductPage({params} : ProductPageProps){
    const {slug} = await params;
    const product = await getProduct(slug)

    return(
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-square">
                {product.productImage && (
                    <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="rounded-lg shadow-md"
                    />
                )

                }
              </div>
               <div className="flex flex-col gap-8">
                <h1 className="text-4xl font-bold">
                    {product.title}
                </h1>
                <p className="text-2xl font-sans">
                    {product.price}
                </p>
                <p className="text-semibold font-sans">
                    {product.description}
                </p>
                <button className='flex gap-2 mt-2'>
               <FaCircle className='text-[#23A6F0] '/>
               <FaCircle className='text-[#23856D] '/>
               <FaCircle className='text-[#E77C40] '/>
                <FaCircle className='text-[#252B42] '/>
                </button>
        
                <Image src="/star4.5.png" alt="" width={100} height={100}/>
                <button className="bg-[#23856D] text-white py-2  rounded-md">
                    Add To Cart
                </button>
               </div>
           </div>
        </div>
    )
}



