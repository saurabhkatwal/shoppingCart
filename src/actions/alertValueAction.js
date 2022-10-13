const alertValueAction=(state,products)=>{
    let cost=state.totalCost;
            alert("your subtotal is $"+cost);
            return {
                ...state,
                totalCost:0,
                productsData:products,
                cartItems:[],
                totalItems:0,
                showCart:false
            }
}
export default alertValueAction;