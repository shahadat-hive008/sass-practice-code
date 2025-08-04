const query = "name=Jhon&age=25&city=Dhaka";
// const arr = query.split("&");
// let queryObj
// const singleArr = arr.map((a) => {
//     const obj = a.split("=");
//     const object = Object.fromEntries([obj]);
//     queryObj = {...queryObj, ...object}
// });
// const obj = query.split("&").map(param=>param.split("="))
// const queryObj = Object.fromEntries(obj)
// console.log(queryObj);
const number = [1,1,3,3,9];
for(let i = 0; i<number.length-1; i++)
{
    if(number[i] === number[i+1]){
        let sum = number[i] + number[i+1]
        number.splice(i, 2, sum);
        i=0;
    }
    
}
console.log(number)