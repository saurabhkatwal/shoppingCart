const getTotalCost=(insideCart)=>{
    let returnedCost=insideCart.reduce((acc,curr)=>{
        return acc+=(curr.count*curr.price)
    },0)
    return returnedCost;
    }
export default getTotalCost;