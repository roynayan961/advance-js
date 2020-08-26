const Actors   = [
    {id:21, name: 'Jeet'},
    {id:31, name:'Dev'},
    {id:41, name:'Koushani'},
    {id:71, name:'Payel'},
];
const names = Actors.map(A=> A.name)
const ids = Actors.map(i=> i.id)
console.log(names)
console.log(ids)
const bigger = Actors.filter(A=>A.id>31)
console.log(bigger)
const biggerOne = Actors.find(A=>A.id>31)
console.log(biggerOne)