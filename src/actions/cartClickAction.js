import increaseCount from "../functions/increaseCount";
import isPresentInCart from "../functions/isPresentInCart";
import getCartItemsCount from "../functions/getCartItemsCount";
import getTotalCost from "../functions/getTotalCost";
const cartClickAction=(action,state)=>{
    let clickedId=action.obj.target.parentElement.id;
        let insideCart=JSON.parse(JSON.stringify(state.cartItems))
        let productsN=JSON.parse(JSON.stringify(state.productsData));
        let returnedObj=increaseCount(productsN,clickedId);
        // console.log("returned obj",returnedObj)
        productsN=productsN.map(product=>{
            if(product.id==clickedId){
                product.count++;
                return product;
            }
            else{
                return product;
            }
        })
        // for(let i=0;i<productsN.length;i++){
        //     if(productsN[i].id==clickedId){
        //         productsN[i].count+=1;
        //     }
        // }
        if(isPresentInCart(insideCart,clickedId)){
            insideCart = insideCart.map(item=>{
                if(item.id==clickedId){
                    item={...returnedObj};
                    return item;
                }
                else{
                    return item;
                }
            })
        }
        // if(isPresentInCart(insideCart,clickedId)){
        //     for(let i=0;i<insideCart.length;i++){
        //         if(insideCart[i].id==clickedId){
        //             insideCart[i]={...returnedObj};
        //         }
        //     }
        // }
        else{
            insideCart.push(returnedObj);
        }
        let count=getCartItemsCount(insideCart);
        let costValue=getTotalCost(insideCart);

        return {
            ...state,
            productsData:JSON.parse(JSON.stringify(productsN)),
            cartItems:JSON.parse(JSON.stringify(insideCart)),
            totalItems:count,
            totalCost:costValue
        }
}
export default cartClickAction;