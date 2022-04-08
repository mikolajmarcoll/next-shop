import Link from "next/link"
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { ProductDetails } from "../../components/Product"

const ProductIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!data) return <div>Something went wrong ...</div>
    
    return (
        <div>
            <Link href="/products">
                <a> Go back </a>
            </Link>
            <ProductDetails data={{
                id: data.id,
                title: data.title,
                thumbnailUrl: data.image,
                thumbnailAlt: data.title,
                description: data.description,
                rating: data.rating.rate
            }} />
        </div>
    )
}

export default ProductIdPage

export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data: StoreApiResponse[] = await res.json();
    
    return {
        paths: data.map(({ id }) => ({
            params: {
                productId: id.toString()
            }
        })),
        fallback: false,
    }
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ productId: string }>) => {
    if (!params?.productId) return {
        props: {},
        notFound: true,
    }
    const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
    const data: StoreApiResponse | null = await res.json();

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
