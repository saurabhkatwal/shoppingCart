const incrementAction=(action,state)=>{
    let clickedBtnId=action.obj.target.parentElement.id;
            let cartItemsList=JSON.parse(JSON.stringify(state.cartItems));
            let productsList=JSON.parse(JSON.stringify(state.productsData));
            let count=state.totalItems;
            let cost=state.totalCost;
            let trimmedId=clickedBtnId.substr(0,clickedBtnId.length-3);
            for(let i=0;i<productsList.length;i++){
                if(productsList[i].id==trimmedId){
                    productsList[i].count+=1;
                }
            }
            for(let i=0;i<cartItemsList.length;i++){
                if(String(cartItemsList[i].id)==trimmedId){
                    cartItemsList[i].count+=1;
                    count++;
                    cost+=cartItemsList[i].price
                }
            }
            return {
                ...state,
                productsData:productsList,
                cartItems:cartItemsList,
                totalCost:cost,
                totalItems:count
            }
}
export default incrementAction;