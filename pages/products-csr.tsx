import { useQuery } from "react-query";

import { ProductDetails } from "../components/Product";

const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data: StoreApiResponse[] = await res.json();
    return data;
}

export const ProductsPage = () => {

    const { data, isLoading, isError } = useQuery("products", getProducts);

    
    if (isLoading) return <div>Loading ...</div>
    if (!data || isError) return <div>Coś poszło nie tak</div>
    
    return <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 shadow border-2">{data.map(({ id, description, title, image, rating:{ rate } }) => <li key={`product-title-${id}`}><ProductDetails data={{id, description,thumbnailUrl:image,thumbnailAlt:title,rating: rate,title}} /></li>)}</ul>
}

export default ProductsPage;

interface StoreApiResponse {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate:  number;
        count: number;
    }
}
