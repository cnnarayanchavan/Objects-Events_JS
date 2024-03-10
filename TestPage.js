const date = new Date();
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getTime());
console.log(date.getDay());
console.log(date.getHours());

demo1 = function() {
    if (date.getHours() > 22) {
        console.log("Hey good morning honey");
    }
    else if (date.getHours() < 22) {
        console.log("Hey good evening honey");
    }
    
}
const functionPerformed = demo1();
console.log(functionPerformed);