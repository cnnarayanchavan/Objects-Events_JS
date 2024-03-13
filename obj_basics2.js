//lets accomplish the task step by step 
const date = new Date();
DDMMYY = date.toLocaleDateString();
Time = date.getHours();
const Customer = {
    fullName :{
        firstName : "Narayana",
        lastName : "Chavan",
    },
    custID : 23092,
    productID : 234_231,
    purchesDate :   DDMMYY,
    cusAdd : " Popular Colony Giridhar Nagar Warje, Pune",
    postalCode : 400549,
    greetMsg : function (){
        if (Time > 12) {
            console.log(`Hey ${this.fullName.firstName} Have a Very Good Morning...`);
        }
        else `Hey ${this.fullName.firstName} Have a Very Good Evening...`
    }


    
    // greetCustomer: function() {
    //     const isMorning = this.currentDate.getHours() < 12; // Check if it's before noon
    
    //     console.log(isMorning ? `Good morning, ${this.name}!` : `Good afternoon/evening, ${this.name}!`);
    //   }  
    //this was the method in which i used in object but in this method i used ternary operator insted of if else 
}

const navinArrayofObjectofUser = [
    {userName : "Narayana", adddress : "Gavane Chowk", postalCode :431401, state : "Gujrat"},
    {userName : "Nitin", adddress : "Niraj Motel", postalCode :431401, state : "Karnataka"},
    {userName : "Surindar", adddress : "Singhada Choe", postalCode :34434, state : "UttarPradesh"},
    Details = {employeeID : "oo87s2", employeeSal : "/LPA", Beninits : "Health Care" }]
    //"New Gen Tech", "Brazzers limited",3400,2300 ]

    //console.log(navinArrayofObjectofUser.length);
    // for(let key in navinArrayofObjectofUser){
    //     console.log(navinArrayofObjectofUser[key]);
    // }

    //create a function which print the username of employee along with their state

    // navinArrayofObjectofUser.printUserData = function(){
    //     for(const data of navinArrayofObjectofUser){
    //         console.log(`Hey ${navinArrayofObjectofUser.userName} welcome to XYZI your are from ${navinArrayofObjectofUser.state} sate.`);
    //     }
    // }
    // navinArrayofObjectofUser.printUserData(navinArrayofObjectofUser);


    function greetUser (){
        for (const data of navinArrayofObjectofUser) {
            console.log(`hey ${data.userName} welcome back and are you from ${data.state} so you have ${Details.employeeID} employeeID ??`);
        }
    }
    greetUser();



















































//console.log(Customer.greetMsg()); 

// Customer.greeting=function(){
//      method = console.log(`Namaste ${this.fullName.firstName} ${this.fullName.lastName} Welcome to Ecommers.. your productID is ${this.productID}, you have made a purches on date ${this.purchesDate}`);
//      return

// }
//const method1 = Customer.greeting();
//console.log(Customer.greeting());

// console.log(Time,DDMMYY);
