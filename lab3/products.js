const products= [
    {id :1, name:'marker', qty:100, price:15},
    {id :2, name:'pen', qty:200, price:10},
    
]

let nextId = 3;

export const getAllProducts = () => {
    return products;
}
export const addProduct=(item)=>{
item.id=nextId;
nextId++;
products.push(item);
return item;
};
export const deleteProduct=(pid)=>{
const item=products.findIndex((prd)=>prd.id===pid);
if(item==-1)
    return false;
products.splice(item,1)
console.log("products remaining:",products);
return true;
};
//create a function to update any  product even pid call this function in to prg6.js and verify its working by echoapi
export const updateProduct=(pid,updateItem)=>{
    const index = products.findIndex((prd)=>prd.id===pid);
    if(index==-1){
        return false;
    }
    updateItem.id=pid;
    products[index]=updateItem;
    return updateItem;    
};
//get product by id
export const getProductById=(pid)=>{
    const index = products.findIndex((prd)=>prd.id===pid);
    if(index==-1){
        return false;
    }
    return products[index];
};