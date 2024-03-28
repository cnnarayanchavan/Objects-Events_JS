//data from db about the books and its gener etc
const books = [ 
    { title: 'Book One', genre: 'Fiction', publish: 1981, price: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, price: 2008 },
    { title: 'Book Three', genre: 'History', publish: 2000, price: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, price: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, price: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1981, price: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1981, price: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, price: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1999, price: 1989 },
  ];

// filter according to the problem statement 

const node1 = books.filter( (prop)=> prop.genre === "Non-Fiction")
//console.log(node1)

//NOTE ::  here if we use the scope means that the curly breses for the arrow function then we have to retunn the variable defined inside that scope of curly breses
//like this 
// try to access the multipel property from an object array

const node2= books.filter( (bk2)=>{
  return  bk2.genre === "Non-Fiction" || bk2.edition ==2010
} )
//console.log(node2);



//Now make the process more optimized by using " reduce " higher order function
//it includes "acc" "currVal" "initialVal"

// problem statement : print the total of price of books whose year of publich in between 1900 to 2000

// const node3 = books.map( (temp1)=>{ 
//   if (temp1.publish>=1900 || temp1.publish<2000) 
//   {
   
//   }
//   console.log(node3)
// } )


// PS3 : Print the total addition of price of all books uning reduce 

const node4 = books.reduce((acc,temp1) => (acc+temp1.price),0)
console.log(node4);


