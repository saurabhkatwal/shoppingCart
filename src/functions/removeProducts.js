const removeProducts=(productsToRemove,clickedId)=>{
    let newProducts=productsToRemove.map(product=>{
        if(product.id==clickedId){
            product.count=0;
            return product;
        }
        return product;
    })
    return newProducts;
    }
export default removeProducts;