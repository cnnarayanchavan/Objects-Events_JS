// learning about the complex object, complex function and complex array.
let currDate = new Date();
date = currDate.toDateStrng;
let Grahak = 
{
    Name : {
        firstName : "Narayan",
        lastName : "Chavan",
        emailID : "cnnarayanchavan@gmail.com"      
    },
    OtherDetails : {
        Age : 21,
        Address : "XYZ street near PQR NLM",
        PostalCode : 342009,
    },
    OrderHistory :
    [ 
        {orderItem : "Laptop", orderPrice : 450, orderID : "009AMA8", totalQuantity : 5},
        {orderItem : "Air Dops", orderPrice : 249, orderID : "P456009", totalQuantity : 6}
    ],
    OrderHistory2 : 
    [  
        {orderItem : "Mouse", orderPrice : 450, orderID : "PI9988", totalQuantity : 8},
        {orderItem : "Termal Paste", orderPrice : 150, orderID : "DI4455", totalQuantity : 9}
    ], 
    StatusIsLoggedIN : true,
    CurrDate : date,
    CartItemsTotal : 90000
}

const Grahak_2 = 
{
    Name : {
        firstName : "Nitin",
        lastName : "Chavan",
        emailID : "chavannitin14@gmail.com"      
    },
    OtherDetails : {
        Age : 29,
        Address : "XYZ street near PQR NLM",
        PostalCode : 342009,
    },
    OrderHistory :
    [ 
        {orderItem : "Laptop", orderPrice : 450, orderID : "009AMA8", totalQuantity : 5},
        {orderItem : "Air Dops", orderPrice : 249, orderID : "P456009", totalQuantity : 6}
    ],
    OrderHistory2 : 
    [  
        {orderItem : "Mouse", orderPrice : 450, orderID : "PI9988", totalQuantity : 8},
        {orderItem : "Termal Paste", orderPrice : 150, orderID : "DI4455", totalQuantity : 9}
    ], 
    StatusIsLoggedIN : true,
    CurrDate : date,
    CartItemsTotal : 90000
}

//task
// Calculate the total amount spent by the customer:
// Iterate through the orders array within the customer object.
// For each order, multiply the product price by the quantity and add it to a running total.
//in output modify the day=te to string
//console.log(Grahak);
function printGrandTatal()
{
    for (const items of Grahak.OrderHistory) 
    {
        const total = (items.totalQuantity*items.orderPrice);
        console.log(`Hey ${Grahak.Name.firstName} ${Grahak.Name.lastName} Your total for ${items.orderItem} is ${total} you have made this purches on date ${Grahak.CurrDate}`);     
    }
}

function printGrandTatal_2()
{
    for (const items of Grahak_2.OrderHistory2) 
    {
        const total = (items.totalQuantity*items.orderPrice);
        console.log(`Hey ${Grahak_2.Name.firstName} ${Grahak_2.Name.lastName} Your total for ${items.orderItem} is ${total} you have made this purches on date ${Grahak.CurrDate}`);     
    }
}
printGrandTatal();
printGrandTatal_2();





