//falsy=> 0, '', "", undefined, null, NaN, false
//truthy=> '0', ' ', " ", [], {} 'false' , 'true' true =>if u write anything or use space/0 inside string it will be true.

const age = -4; //if age=0 it will show false
if(age){
 console.log("condition1 is true")
}
 else 
 {
 console.log("condition1 is false")

}
const name = " Solaiman " 
if(name.length <0){
    console.log("condition2 is true")
}
else 
console.log("condition2 is false")

if(name.length){
    console.log("condition3 is true")
}
else 
console.log("condition3 is false")

if(name){
    console.log("condition4 is true")
}
else 
console.log("condition4 is false")
const val = "0"
if(val){
    console.log("condition5 is true")
}
else{
    console.log("condition5 is false")

}
const val2 = " "
if(val2){
    console.log("condition6 is true")
}
else{
    console.log("condition6 is false")

}
const val3= 0
if(val3){
    console.log("condition6 is true")

}
else{
    console.log("condition6 is false")

}
let nayan;

if(nayan){
 console.log("true")
} 
else {

    console.log("false")
}//it will show undefined=>false  because no value assigned to this variable.
let name2 = null;
if(name2){
    console.log("true")
}
else 
{
    console.log('false')

}
let name3 = NaN
console.log(name3)
if(name3){
 console.log("condition true")
}
else {
    console.log("condition false") // '0' ' ' etc are true but empty string '' false.

}
