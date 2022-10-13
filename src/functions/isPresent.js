const isPresent=(sizes,product)=>{
    console.log("sizes",sizes);
    console.log("product",product);
    for(let i=0;i<sizes.length;i++){
        if(product.availableSizes.includes(sizes[i].toUpperCase())){
            return true;
        }
    }
    return false;
  }
  export default isPresent;