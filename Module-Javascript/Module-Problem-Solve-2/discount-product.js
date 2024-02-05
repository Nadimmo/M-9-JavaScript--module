
//  * upto 100: ---> 100
//  * more than 101-200: --> 90
//  * more than 200: --> 70

function discountProducts(price){
    if(price <= 100){
        return price* 100;
    }
    else if(price <= 200){
        return price* 90;
    }
    else{
        return price* 70;
    }
}

let result = discountProducts(201);
console.log("Total Price",result);



// layer-discount
/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
*/
function layerDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const last100Price = 70;

    if(quantity <= 100){
       const  total = first100Price * quantity;
        return total;
    }
    else if(quantity <= 200){
        const  first100Total = first100Price * 100;
        let remainderQuantity =  quantity - 100;
        let  remainigQuantity = remainderQuantity * second100Price;
        let Total = first100Total + remainigQuantity;
        return Total;
    }
    else{
        let  first100Total = first100Price * 100;
        let second100Total = second100Price * 100;
        let remainderQuantity = quantity - 200;
        let remainingTotal = remainderQuantity * last100Price;
        let last = first100Total + second100Total + remainingTotal;
        return last;
    }
}

let result2 = layerDiscount(150);
console.log("layer discout",result2);