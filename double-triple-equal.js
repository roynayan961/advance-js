const first = 2;                    //0=false, 1=true so we can compare to test them too.by double equal
const second = "2";
if(first == second){                // double equal matches the value

console.log("double equal condition is true")

}
else{
    console.log("double equal condition false")
}


if(first === second){               //triple equal matches type

    console.log("triple equal condition is true")
    
    }
    else{
        console.log("triple equal condition is false")
    }                               // when u compare between 0 and false/true by triple equal this will produce false because one is digit other is bool-ian (triple equal checks the type) 