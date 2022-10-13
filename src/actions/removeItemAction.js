import removeItemFromCart from '../functions/removeItemsFromCart';
import removeProducts from '../functions/removeProducts'
import getCartItemsCount from '../functions/getCartItemsCount';
import getTotalCost from '../functions/getTotalCost';
const removeItemAction=(action,state)=>{
    let clickedId=action.obj.target.parentElement.parentElement.id;
            let itemsInCart=JSON.parse(JSON.stringify(state.cartItems));
            let remainingItems=removeItemFromCart(itemsInCart,clickedId);
            let products=JSON.parse(JSON.stringify(state.productsData));
            let updatedCountInProducts=removeProducts(products,clickedId);
            let count=getCartItemsCount(remainingItems);
            let costValue=getTotalCost(remainingItems);
            return {
                ...state,
                cartItems:remainingItems,
                totalItems:count,
                totalCost:costValue,
                productsData:JSON.parse(JSON.stringify(updatedCountInProducts))
            };
}
export default removeItemAction;