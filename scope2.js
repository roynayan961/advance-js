//but interesting thing is that we can use the variable declared outside the function from inside the function.
//these are the two parts of scope.

let bonus = 20; // a global scope
function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus + "" + " outsider variable accessing inside the function because its global scope")
    return result;

}
console.log(bonus +"" + "variable accessing outside the function because its global scope")
//but we can access the variable declared outside of the function anywhere inside or outside the function, its global