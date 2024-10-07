// Js forEach Method
let arry = [45,9,16,4,25];

function myfunction1(value,index,arry) {
    console.log(value);
    console.log(index);
    console.log(arry);
    console.log('______');  
}
arry.forEach(myfunction1);

// Js map Method
let arry1 = [45,9,16,4,25];

function myfunction2(value) {
     return value * 2;
}
let calculate = arry1.map(myfunction2);
console.log(calculate);

// Js filter Method
const myArr = [1, 2, 3, 4, 5, 6];
function arry2(value) {
    return  value > 2;   
}
const newArr = myArr.filter(arry2);
console.log(newArr);

// Js Array Reduce Method
let arry3 = [1, 2, 3, 4, 5, 6];

function sum(total,value) {
    return total + value;
}

let totals = arry3.reduce(sum,0);
console.log(totals);
