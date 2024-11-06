



class ProductsApi {

    async getCategoriesApi () {
        return fetch('https://fakestoreapi.com/products/categories')
    }

    async getProductsApi () {
        return await fetch('https://fakestoreapi.com/products')
    }

    async getProductsCategory (category) {
        return await fetch(`https://fakestoreapi.com/products/category/${category}`)
    }


}


export  const  productApi = new ProductsApi()