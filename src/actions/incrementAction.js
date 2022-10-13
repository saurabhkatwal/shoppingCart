const incrementAction=(action,state)=>{
    let clickedBtnId=action.obj.target.parentElement.id;
            let cartItemsList=JSON.parse(JSON.stringify(state.cartItems));
            let productsList=JSON.parse(JSON.stringify(state.productsData));
            let count=state.totalItems;
            let cost=state.totalCost;
            let trimmedId=clickedBtnId.substr(0,clickedBtnId.length-3);
            // for(let i=0;i<productsList.length;i++){
            //     if(productsList[i].id==trimmedId){
            //         productsList[i].count+=1;
            //     }
            // }
            productsList=productsList.map(product=>{
                if(product.id==trimmedId){
                    product.count+=1;
                    return product;
                }
                else{
                    return product;
                }
            })
            // for(let i=0;i<cartItemsList.length;i++){
            //     if(String(cartItemsList[i].id)==trimmedId){
            //         cartItemsList[i].count+=1;
            //         count++;
            //         cost+=cartItemsList[i].price
            //     }
            // }
            cartItemsList=cartItemsList.map(item=>{
                if(String(item.id)==trimmedId){
                    item.count+=1;
                    count++;
                    cost+=item.price;
                    return item;
                }
                else{
                    return item;
                }
            })
            return {
                ...state,
                productsData:productsList,
                cartItems:cartItemsList,
                totalCost:cost,
                totalItems:count
            }
}
export default incrementAction;