import { createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import logger from "redux-logger"
import Content from "../components/Content.js";
import data from "./products.js"
import Size from "../components/Size"
console.log("data ",data);

let products=[];

for(let i=0;i<data.products.length;i++){
    console.log("executed")
    let obj={...data.products[i],count:0};
    products.push(obj);
}

console.log("after adding count property");

console.log(products);

const removeProducts=(productsToRemove,clickedId)=>{
console.log("inside remove products");
console.log(productsToRemove)
let newProducts=productsToRemove.map(product=>{
    if(product.id==clickedId){
        console.log("before")
        console.log(product);
        product.count=0;
        console.log(product)
        console.log("after")
        return product;
    }
    return product;
})
console.log("after resetting count to 0")
console.log(newProducts)
}
const getTotalCost=(insideCart)=>{
let returnedCost=insideCart.reduce((acc,curr)=>{
    return acc+=(curr.count*curr.price)
},0)
console.log("current cost",returnedCost)
return returnedCost;
}

const getCartItemsCount=(insideCart)=>{
let count=insideCart.reduce((acc,curr)=>{
    return acc+=curr.count;
},0)
console.log(count);
return count;
}
const removeItemFromCart=(items,id)=>{

let filteredItems=items.filter(item=>{
    return item.id!=id;
})
return filteredItems;
}
const isPresent=(sizes,product)=>{
    for(let i=0;i<sizes.length;i++){
        if(product.availableSizes.includes(sizes[i].toUpperCase())){
            return true;
        }
    }
    return false;
  }

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

const getObj=(productsN,id)=>{
    console.log("value of products")
    console.log(productsN);

let [targetObj]=productsN.filter(product=>{
    return product.id==id;
})

console.log("inside method");
console.log("target");
console.log(targetObj);
console.log(targetObj.count)

return targetObj;
}

const increaseCount=(productsN,id)=>{

    let obj=JSON.parse(JSON.stringify(getObj(productsN,id)));
    console.log("before",obj);
    obj.count+=1;
    console.log("after",obj);
    return JSON.parse(JSON.stringify(obj));

}

let reducerFn=(state={productsData:JSON.parse(JSON.stringify(products)),
    sizes:["xs","s","m","ml","l","xl","xxl"],
    activeToggles:{
        xs:false,
        s:false,
        m:false,
        ml:false,
        l:false,
        xl:false,
        xxl:false
    },activeButtons:[],
    filteredData:JSON.parse(JSON.stringify(products)),
    cartItems:[],
    showCart:false,
    totalItems:0,
    totalCost:0
},action)=>{
    if(action.type==="click"){
        let text=action.obj.target.innerText;
        let toggleState=JSON.parse(JSON.stringify(state.activeToggles));
        console.log(toggleState[text])
        toggleState[text]=!state.activeToggles[text];
        let activeToggleEntries=Object.entries(toggleState)
        let positives=activeToggleEntries.filter(entry=>{
            return entry[1];
        }).map(positive=>{
            return positive[0]
        })
        let sizes=[...positives];
        let dataFiltered
        =state.productsData.filter(product=>{
            return isPresent(sizes,product);
        })
        return {
            ...state,
            activeButtons:[...positives],
            filteredData:(positives.length===0)?(state.productsData):([...dataFiltered]),
            activeToggles:JSON.parse(JSON.stringify(toggleState))
        }
    }
    if(action.type==="cartClick"){
        let clickedId=action.obj.target.parentElement.id;
        let insideCart=JSON.parse(JSON.stringify(state.cartItems))
        let productsN=JSON.parse(JSON.stringify(state.productsData));
        let returnedObj=increaseCount(productsN,clickedId);
        for(let i=0;i<productsN.length;i++){
            if(productsN[i].id==clickedId){
                productsN[i].count+=1;
            }
        }
        console.log("returned object ",returnedObj);
        if(isPresentInCart(insideCart,clickedId)){
            console.log("item is already in the cart")
            for(let i=0;i<insideCart.length;i++){
                if(insideCart[i].id==clickedId){
                    console.log("object before change")
                    console.log(insideCart[i]);
                    insideCart[i]={...returnedObj};
                    console.log("object after change")
                }
            }
        }
        else{
            console.log("new item")
            insideCart.push(returnedObj);
            console.log(insideCart);
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
        if(action.type==="toggleCart"){
            return{
                ...state,
                showCart:!state.showCart
            }
        }
        if(action.type==="removeItem"){
            let clickedId=action.obj.target.parentElement.parentElement.id;
            let itemsInCart=JSON.parse(JSON.stringify(state.cartItems));
            let remainingItems=removeItemFromCart(itemsInCart,clickedId);
            let products=JSON.parse(JSON.stringify(state.productsData));
            let updatedCountInProducts=removeProducts(products,clickedId);
            console.log("remaining items",remainingItems)
            console.log(remainingItems)
            let count=getCartItemsCount(remainingItems);
            let costValue=getTotalCost(remainingItems);
            return {
                ...state,
                cartItems:remainingItems,
                totalItems:count,
                totalCost:costValue
            };
        }
    return state;
}

let store=createStore(reducerFn,composeWithDevTools(
    applyMiddleware(logger)
  ));

export default store