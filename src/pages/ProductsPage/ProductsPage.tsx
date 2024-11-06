import React, {useEffect} from 'react';
import CardProduct from "../../components/cardProduct/CardProduct.tsx";
import Button from "../../components/button/Button.tsx";
import {observer} from "mobx-react-lite";
import {productsStore} from "../../store/ProductsStore.tsx";
import {toUpperCase} from "../../utils/toUpperCase.ts";

const ProductsPage = observer(() => {

    const {products, categories, filteredCategories, loading, categoryColor} = productsStore


    useEffect(() => {
        productsStore.getAllProducts()
    }, [])

    useEffect(() => {
        productsStore.getAllCategories()
    }, []);




    return (
        <>
            <h2 className={'text-3xl text-center mb-[20px]'}>Products</h2>

            <div className={'flex gap-[30px] justify-center mb-[50px]'}>
                <Button
                    disabled={loading}
                    onClick={productsStore.getAllProducts}
                    type={'button'}
                    color={'secondary'}>All</Button>
                {
                    categories?.map((category) => (

                        <Button
                            disabled={loading}
                            key={category}
                            onClick={() => filteredCategories(category)}
                            className={`${category === categoryColor ? 'text-blue-700 border-b-blue-700'  : ''}`}
                            type={'button'} color={'secondary'}>{toUpperCase(category)}</Button>

                    ))
                }
            </div>
            <div className={'flex flex-wrap gap-6'}>
                {
                    loading ? <div>...loading</div> : products?.map((product) => (
                        <div key={product.id}>
                            <CardProduct item={product}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
});

export default ProductsPage

