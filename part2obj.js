const whatsapp = new Object();
// whatsapp.User={
//     username:"narayan chavan",
//     userid:1234,
//     userage:20,
//     userbloodgroup:"O-" 
// }
// console.log(whatsapp.User);

obj1={ 
    a:1,
    b:2,
    c:3
}
obj2={ 
    d:11,
    e:12,
    f:13
}
obj3={ 
    g:14,
    h:15,
    i:16
}
obj4={ 
    j:17,
    k:18,
    l:19
}



// obj3 = {
//     obj1,obj2
// }
// console.log(obj3);

// Object.assign(obj1,obj2,obj3,obj4);
// console.log(obj1);
// console.log(obj4===obj1);


// but the simplest method is using "..."

const ans ={...obj1, ...obj2, ...obj3}
console.log(ans);


//if you have an array of an 3 objects and you wnat to find the specific property from that objects how you will do that

// const UserData_from_API= [ 
//     {
//         username : { 
//             FirstName : "Narayan",
//             Lastname : "Chavan",
//         },
//         userAge : 20,
//         userPurchesDetail : {
//             ItemName : "Fasttrack_0067",
//             Itemprice : 12000,
//             Itemdate : Date.now
//         }

//     },
//     {
//         Phoen_no : 97675653,
//         userid : "00231",
//         Useradd : "ABZ__xyz"
//     }
// ]

// const op = UserData_from_API[1].Useradd
// console.log();
// //console.log(UserData_from_API);



console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty("z"));