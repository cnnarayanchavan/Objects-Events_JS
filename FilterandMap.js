//data from db about the books and its gener etc
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// filter according to the problem statement 

const node1 = books.filter( (prop)=> prop.genre === "Non-Fiction")
console.log(node1)

//NOTE ::  here if we use the scope means that the curly breses for the arrow function then we have to retunn the variable defined inside that scope of curly breses
//like this 
// try to access the multipel property from an object array

const node2= books.filter( (bk2)=>{
  if (bk2.genre === "Non-Fiction" || bk2.edition ==2010) {
    return node2
  }
} )