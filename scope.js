function sum(first, second){
    let result = first+second;
    console.log(result + "" + "local scope")  //its a local scope so it can access the elements inside this function only
    return result;

}
const output = sum(3,7) 

