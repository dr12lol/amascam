// const url = 'https://fakestoreapi.com/products/'
const url = 'https://dummyjson.com/products?limit=200'
const response = await fetch(url)
const {products} = await response.json()
const categoryList = document.getElementById('categories')
const productList = document.getElementById('products')

const categories = extractCategoryNames()

showCategories()

function extractCategoryNames() {
    return products.reduce((categories, {category})=>{
        // if (!categories.includes(category)) {
        //     return categories.concat(category)
        // } else{
        //     return categories
        // }
        return categories.includes(category) ? categories : categories.concat(category)
    }, [])
}
function showCategories() {
    categoryList.innerHTML = categories.reduce((html, category)=>{
        return html + `<li>${category}</li>`
    }, "")
}