const getCartItemsCount=(insideCart)=>{
    let count=insideCart.reduce((acc,curr)=>{
        return acc+=curr.count;
    },0)
    return count;
    }
export default getCartItemsCount;