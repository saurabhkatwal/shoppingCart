import clickAction from '../actions/clickAction'
import cartClickAction from '../actions/cartClickAction'
import removeItemAction from '../actions/removeItemAction'
import incrementAction from '../actions/incrementAction'
import decrementAction from '../actions/decrementAction'
import alertValueAction from '../actions/alertValueAction'
import data from "./products.js"
let products=[];

products=data.products.map(product=>{
    return {...product,count:0}
})
// for(let i=0;i<data.products.length;i++){
//     let obj={...data.products[i],count:0};
//     products.push(obj);
// }
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
        return clickAction(action,state);
    }
    if(action.type==="cartClick"){
        return cartClickAction(action,state);
        }
        if(action.type==="toggleCart"){
            return{
                ...state,
                showCart:!state.showCart
            }
        }
        if(action.type==="removeItem"){
            return removeItemAction(action,state);
        }
        if(action.type==="increment"){
            return incrementAction(action,state);
        }
        if(action.type==="decrement"){
            return decrementAction(action,state);
        }

        if(action.type==="alertValue"){
            return alertValueAction(state,products);
        }
    return state;
}
export default reducerFn;