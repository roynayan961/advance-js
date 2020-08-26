const numbers = [3, 4, 5, 6, 7, 8 ];
const output=[];
for(let i=0; i<numbers.length; i++){ //if i use <= it will show an extra value NaN-ask the forum

    const element = numbers[i];
    const result = element*element;
    output.push(result)
}

console.log(output)     //showing the output by loop

function square (element){

    return element*element;
}
numbers.map(square);
console.log(output)     //showing the output by map
 // another process
 numbers.map(function  (element){

    return element*element;
 }
 
 )
console.log(output)   //showing map in different way

numbers.map(function square (element){

    return element*element;
 }
 
 )
console.log(output)   //showing map in another way
const result = numbers.map(function square (element){

    return element*element;
 }
 
 )
console.log(result)   //showing map in another way
const result1 = numbers.map(element=> element*element)

console.log(result1)   //showing map in another way
//function square (x){return x*x} === numbers.map(x=>x*x)
const result2 = numbers.map(x=> x*x)


 
console.log(result2)   //showing map in another way //[function square (element){return element*element} === numbers.map(element=>element*element)]
console.log("Now we will show the charisma of filter and find, however they are almost same")
const bigger = numbers.filter(x=> x>6)
console.log("by filter function here value whose are bigger then 6 in the array " + " "+ bigger)
const isThere = numbers.find(x=> x<6)
console.log(" by  find function here  the first number which is smaller  then 6 in the array " + " "+ isThere)  
