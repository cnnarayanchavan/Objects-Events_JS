//recalling the arrow function

function greet(){
   // console.log("Hello world!");
}
greet()

Narayan=(greet) => 
{
    if (!greet) 
    {
        console.log("please enter msg");
        return
    }
    console.log(`Hello ${greet}`);
}
//Narayan();
Narayan("Narayana");