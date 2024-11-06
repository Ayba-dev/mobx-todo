import {makeAutoObservable} from "mobx";
import {IProduct} from "../types/Types.ts";
import {productApi} from "../api/productsApi.ts";


export const productsStore = makeAutoObservable({

    categoryColor: '' as string,
    error: '' as string,
    gloading: false as boolean,
    products: [] as IProduct[],
    categories: [] as string[],

    // Generator function to get all products
    * getAllProducts() {
        productsStore.loading = true
        productsStore.error = ''
        try {
            const response: Response = yield productApi.getProductsApi()

            if (response.ok) {
                productsStore.loading = false
                const data: IProduct[] = yield response.json();
                console.log(data)
                productsStore.products = data

            }

        } catch (error) {
            console.error("Failed to fetch products", error);
            productsStore.error = error.message
        }
    },


    * getAllCategories() {
        try {
            const data: Response = yield productApi.getCategoriesApi()

            if (data.ok) {
                const categories = yield data.json()
                console.log(categories)
                productsStore.categories = categories
            }

        } catch (error) {
            productsStore.error = error.message
        }
    },

    * filteredCategories(str: string) {
        productsStore.loading = true
        try {
            const res = yield productApi.getProductsCategory(str)

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = yield res.json()
            productsStore.products = data || []
            productsStore.loading = false
            productsStore.categoryColor = str

        } catch (error) {
            productsStore.error = error.message
        }
    }
});