const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile",price:70000},
    { name: "Laptop Bag",price:20000},
    { name: "Watch",price:20000},
    { name: "Mobile Charger", price:1500}
]

function max_min(arr){
    let max=0;
    let min=0;
    for (const a in arr){
        if (arr[a].price>max){
            max=a
        }
        else if (arr[a].price<min){
            min=a
        } 
    }
    console.log(`The product with maximum amount is ${arr[max].name} which is priced at ${arr[max].price}`)
    console.log(`The product with minimum amount is ${arr[min].name} which is priced at ${arr[min].price}`)
}
max_min(products)