


export interface Product  {
    _id: string;
    title: string;
    description: string;
    productImage: string; 
    price: number;
    tags?: string[];
    discountPercentage?: number;
    isNew?: boolean;
    slug: {
        _type : "slug"
        current : string;
    }
  };