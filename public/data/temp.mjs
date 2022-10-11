import fetch from 'node-fetch'
async function getData(url){
    let res=await fetch(url)
    let data=await res.json();
    return data;
}
let result=await getData('./products.json')
console.log(result);