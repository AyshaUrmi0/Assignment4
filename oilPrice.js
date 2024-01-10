//calculate the total price
//disel oil price is 114
//petrol oil price is 130
//oceanic oil price is 135

function oilPrice(diesel,petrol,oceanic){
    let dieselPrice = diesel*114;
    let petrolPrice = petrol*130;
    let oceanicPrice = oceanic*135;
    let totalPrice = dieselPrice+petrolPrice+oceanicPrice;
    return totalPrice;
}

let result = oilPrice(1,1,1);
console.log(result);
