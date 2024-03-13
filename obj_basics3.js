// Destructuring in objects
const Student = {
  firstName : "Narayana",
  lastName : "Chavan",
  rollNo : 29,
  clgID : "Chavan0098",
  addrsStud : "Popular Colony"
}

//console.log(Student);
//console.log(Student.addStud);

//here we have to write the object property name with dot operator again and again 
//lets destructur it

const  { addrsStud : add, firstName : FN, lastName : LN, clgID : ID} = Student;  
console.log(add,FN,LN);
