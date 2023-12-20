import { useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer'
import { useGetProducts } from '../hooks/useProducts';

export const Home = () => {

    
    useEffect(() => {
        document.title = "Mi tienda - Home";
    })

    const { productsData } = useGetProducts(8);


    return (
        <>
        <ItemListContainer productsData={productsData} />
        </>
    )
}