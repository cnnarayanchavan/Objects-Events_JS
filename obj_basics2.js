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
        if (Time > 24) {
            console.log(`Hey ${this.fullName.firstName} Have a Very Good Morning...`);
        }
        else if (Time < 24) {
            console.log(`Good Evening flock....`);
        }
    },

}

console.log(Customer.greetMsg()); 

Customer.greeting=function(){
    console.log(`Namaste ${this.fullName.firstName} ${this.fullName.lastName} Welcome to Ecommers.. your productID is ${this.productID}, you have made apurches on date ${this.purchesDate}`);
}
const method1 = Customer.greeting();
console.log(method1);

// console.log(Time,DDMMYY);
