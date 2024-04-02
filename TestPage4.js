const Customer = [
    {Name : "Narayana", age : 22, id : 2212 },
    {Name : "Yash", age : 21, id : 2212 },
    {Name : "Snehal", age : 23, id : 2212 },
    {Name : "Mayuri", age : 24, id : 2212 },
]

//console.log(Customer);
const returnOP = Customer.filter( (node)=> {return node.age>=22 && node.age <=23} );
//.map((node2)=>node2.id);
console.log(returnOP);







































// const customers = {
//     "customer1": {
//       "name": "John Doe",
//       "email": "john.doe@example.com",
//       "phone": "+1234567890",
//       "city": "New York",
//       "state": "NY"
//     },
//     "customer2": {
//       "name": "Jane Smith",
//       "email": "jane.smith@example.com",
//       "phone": "+9876543210",
//       "city": "Los Angeles",
//       "state": "CA"
//     },
//     "customer3": {
//       "name": "Alice Johnson",
//       "email": "alice.johnson@example.com",
//       "phone": "+5678901234",
//       "city": "Chicago",
//       "state": "IL"
//     }
//   };
//   console.log(customers.customer3.name);