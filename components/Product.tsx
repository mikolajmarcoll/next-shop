import { Rating } from "./Rating"

interface ProductProps {
    data: {
      description: string,
      thumbnailUrl: string,
      thumbnailAlt: string,
      rating: number,
    }
  }
  
export  const Product = ({ data: { description, thumbnailUrl, thumbnailAlt, rating } }: ProductProps) => (
      <>
        <img src={thumbnailUrl} alt={thumbnailAlt} />
        <p>{description}</p>
        <Rating rating={rating}/>
      </>
  )