//for of loop for Arrays 

const myArray = ["Java", "Sql", "C", "C++", "Linux", "Git-Hub", "HTML", "Javascript", "MS Excel"]
for (const keys of myArray) 
{
    //console.log(keys);
    //console.log(myArray);
    // console.log(myArray[keys]);
} 

const myObj = 
{
    js : "JavaScript",
    py : "Python",
    cpp : "C++",
    rb : "Ruby"
}
for (const i in myObj) 
{
    //console.log(i);
    // console.log(myObj[i]);
    //console.log(`${i} short for ${myObj[i]}`);
}


const map = new Map()
//console.log(typeof(map)) 
map.set('js',"Javascript");
map.set('py',"Python");
//console.log(map);     //if we print this we get as it is obj  byt there is a syntax 

for (const [i,j] of map) 
{
    //console.log(i);
    console.log(i , ":-" , j );         //this is special syntax
}   

