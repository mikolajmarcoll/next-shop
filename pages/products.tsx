import { InferGetStaticPropsType } from "next";

import { ProductListItem } from "../components/Product";


export const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 shadow border-2">{data.map(({ id, title, image, }) => <li key={`product-title-${id}`}><ProductListItem data={{id, thumbnailUrl:image,thumbnailAlt:title,title}} /></li>)}</ul>
}

export default ProductsPage;

export const getStaticProps = async () => {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data: StoreApiResponse[] = await res.json();

    return {
        props: {
            data,
        }
    }
}

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
