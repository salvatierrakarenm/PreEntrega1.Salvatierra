import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, getFirestore, Firestore, query, where } from "firebase/firestore";

/**
 * @description Custom Hook for get products
 * @returns {Array}
 */


export const useGetProducts = (collectionName = "products") => {
    const [productsData, setProductsData] = useState([]);


    useEffect(() => {

        const db = getFirestore();

        const productsCollection = collection(db, collectionName); //Podemos usarlo para cualquier colección



        getDocs(productsCollection).then((snapshot) => {
            setProductsData(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
        });
    }, []);

    return { productsData };
};

export const useGetProductById = (collectionName = "products", id) => {


    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const docRef = doc(db, collectionName, id)

        getDoc(docRef).then((doc) => {
            setProductData({ id: doc.id, ...doc.data() })
        })

    }, [id]);


    return { productData };
};

export const useGetCategories = (collectionName = 'categories') => {



    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, collectionName);

        getDocs(productsCollection).then((snapshot) => {

            const categoriesSnap = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))


            setCategories(
                categoriesSnap
            );
        });
    }, []);


    return { categories };
};

export const useGetProductsByCategory = (collectionName = "products", id) => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const q = query(collection(db, collectionName), where("category", "==", id));

        getDocs(q).then((snapshot) => {
            const productsByCategory = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setProductData(productsByCategory);
        });
    }, [id]);



    return { productData };
};


