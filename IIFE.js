// Understanding what is IIFE[Immediately Invoked Function Executation]

//we use this method IIFE to get rid of global scope pollution (where teh decleared variables stucks sometimes)

function greetMsg(username){
  console.log(` ${username}, your db is connected`)
}
greetMsg("Narayana");

//this is the common way of defining the function 

(function greetMsg2(username){
  console.log(` ${username}, your db2 is connected`)
})("Nitin")



