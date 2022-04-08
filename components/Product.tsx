import Link from "next/link"
import Image from "next/image"

import { Rating } from "./Rating"

interface ProductDetails {
      id: number,
      description: string,
      thumbnailUrl: string,
      thumbnailAlt: string,
      rating: number,
      title: string
  }

interface ProductProps {
  data: ProductDetails
} 

export  const ProductDetails = ({ data: { description, thumbnailUrl, thumbnailAlt, rating,title } }: ProductProps) => (
      <div className="bg-white p-4">
        <Image src={thumbnailUrl} alt={thumbnailAlt} layout="responsive" width={16} height={9} objectFit="contain" />
        <h2 className="p-4 text-3-xl font-bold">{title}</h2>
        <p className="p-4">{description}</p>
        <Rating rating={rating}/>
      </div>
  )

  type ProductListItem = Pick<ProductDetails, "id" | "title" | "thumbnailUrl" | "thumbnailAlt"> 

  interface ProductListItemProps {
    data: ProductListItem
  } 

  export  const ProductListItem = ({ data: { id, thumbnailUrl, thumbnailAlt, title } }: ProductListItemProps) => (
    <>
      <Image src={thumbnailUrl} alt={thumbnailAlt} layout="responsive" width={16} height={9} objectFit="contain" />
      <Link href={`/products/${id}`}>
        <a>
          <h2 className="p-4 text-3-xl font-bold">{title}</h2>
        </a>
      </Link>
    </>
)  