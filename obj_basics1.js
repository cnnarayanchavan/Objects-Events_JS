//here we are learning objects from basics to advance
const sign = Symbol("chavannarayan")

const UserData = {
    Username : "cnnarayanchavan",
    Email: "cnnarayanchavan@gmail.com",
    Authorization_Medium:"Google",
    Isloggedin:false,
    Recovery_number : 9763472417,
    Status : "Busy",
    [sign] : "1Narayan2Chavan",
    SIGN : Symbol(1234)
}
// console.log(UserData.Username);
// console.log(typeof UserData["Email"]);
// console.log(typeof UserData["Status"]);

//console.log(UserData["Status"]);

            //Object.freeze(<Obj_name>);  is the method to freexe the modification of an objects


//printing symbol, decleard outside object             

// console.log(UserData[sign]);
// console.log(typeof UserData[sign]);


//printing symbol decleard inside object

console.log(UserData);
//console.log(typeof UserData.SIGN);

// for(let key in UserData)
// {
//     console.log(key,UserData[key]);
// }

//console.log(UserData["User name"]);

const Greetings = function(){
    console.log("Hey UserOne welcome to JS");
}
console.log(Greetings());


UserData.Greetings2 = function(){
    console.log(`Hey UserOne, ${this.Username} welcome to JS`);
}
console.log(UserData.Greetings2());
