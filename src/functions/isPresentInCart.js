const isPresentInCart=(insideCart,id)=>{
    let [targetObj]=insideCart.filter(product=>{
        return product.id==id;
    })
    if(targetObj){
        return true;
    }
    else{
        return false;
    }
  }
  export default isPresentInCart;