let bonus = 20; // this outsider variable type let can be accessed from inside of function
function sum(first, second){
    let result = first + second + bonus; //when program scans up to downwards and finds any var then upward let/const also would be replaced by var
  
    if (result > 9){
var mood = "happy"  //const and let cant be accessible outside curly and const cant be changed. in this case we must use var
mood = "funky"
mood = "fishy"
mood = "cranky" //when we use var anywhere, but let/const elsewhere it start uplifting upwards like crane and takes over the position of other let/const type variable and executed total program with var

      
       
    }
   
  
    console.log(mood) //we have accessed the var mood inside of the function but if would be let/const we could not

}
const output = sum(3,7) // let and const cant be used out of curly so we have declared mood as var so it could be console log out of curly. this const also been replaced by var

//if we use variable var before declaration it will produce undefined and if we use let/const before declaration it will produce error.
//var is flexible , const/let are organized and they have specific rules