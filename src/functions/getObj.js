const getObj=(productsN,id)=>{

    let [targetObj]=productsN.filter(product=>{
        return product.id==id;
    })
    
    return targetObj;
    }
export default getObj;