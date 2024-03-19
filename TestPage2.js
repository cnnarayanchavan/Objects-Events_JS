// rebising the arrays

const myArray=[56,34,78,45];
//console.log(myArray);
myArray.push(90);
// myArray.pop();
// myArray.pop();
//console.log(myArray);
let sum =0;
for(i=0; i<myArray.length; i++){
    sum = sum +myArray[i];
}
//console.log(`addition of an elements of an array is ${sum}`);


//iterating through array useing forEach

const newArray = [40,70,30,90,50,33,23,11];
// newArray.forEach(element => {
//     if (element % 2 ==0) {
//         console.log(element);
//     }
// });
newArray.forEach(n=>{
    if(n%2==0){
    //console.log(n);
    }
});

// but for arrays we go with for of loop as we do not need to take care about the kya and values in aaray

const navinarray = [45,32,56,34,22];
for (const n of navinarray) {
    //console.log(n);
}

//and about the or in loop 

aajuneknavinarray = [23,4,56,7,5,3];
for(let key in aajuneknavinarray){
    //console.log(aajuneknavinarray[key]);
}


//up to this was all about the looping satements for objects and functions

function addToCart(...ItemsPrice)
{
    return ItemsPrice;
}
console.log(addToCart(200,300,400));
