// revising the advance function in js

let num1;
function addPriceFromCart(...is_cart_price)
{
    return is_cart_price;
}
//console.log(addPriceFromCart(123,234,45,23,45,23));

let greet = "Narayana";
function greetMsg(Message){
    if (!Message) {
        console.log("Please enter message");
        return
    }
    // else{
    //     console.log(`Hey good morning ${Message}`);
    // }
    return `${Message} Very Good Morning...!`
}

console.log(greetMsg(greet))
