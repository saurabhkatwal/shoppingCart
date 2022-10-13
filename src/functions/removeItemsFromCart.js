const removeItemFromCart=(items,id)=>{

    let filteredItems=items.filter(item=>{
        return item.id!=id;
    })
    return filteredItems;
    }
    export default removeItemFromCart;