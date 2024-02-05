// chair 3 cft
// Table 10 cft
// bad 50 cdf

function wood(chair,table,bad){
    const chairWood = 3;
    const tableWood = 10;
    const badWood = 50;

    let chairTotalWood = chair * chairWood;
    let tableTotalWood = table * tableWood;
    let badTotalWood = bad * badWood;

    let totalWood = chairTotalWood + tableTotalWood + badTotalWood ;
    return totalWood;
}
let result = wood(4,1,1);
console.log("Total Products Wodd", result , " cft");

// shirt price 500;
// pant price 500;
// shoes price 900;

function cloth(shirt,pant,shoes){
    const shirtPrice = 500;
    const pantPrice = 500;
    const shoesPrice = 900;

    let shirtAllprice = shirt * shirtPrice;
    let pantAllprice = pant * pantPrice;
    let shoesAllprice = shoes * shoesPrice;

    let totalPrice = shirtAllprice + pantAllprice + shoesAllprice;
    return totalPrice;
}

let result2 = cloth(2,2,1);
console.log("Total Cost in all Products",result2);