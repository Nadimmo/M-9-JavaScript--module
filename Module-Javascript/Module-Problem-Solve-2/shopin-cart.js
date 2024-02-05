const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 },
]

function price(products){
    let total = 0;
    for(let product of products){
        // console.log(product);
        let totalPrice = product.price * product.quantity;
        total = total + totalPrice;
    }
    return total;
}

let result = price(products);
console.log('Total Products Price',result);