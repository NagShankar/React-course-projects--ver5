//import './utils.js'
import defaultCanBeRenamed, {  add, square } from './utils.js'; //importing square and add which was exported from utils.js, but we can import only what we want to use it here. Note that import is not an object
//order of importing doesnt matter
import seniorOrNot, { isAdult, canDrink } from './person.js'; 

console.log("i am coming from app.js");

//for utils.js
console.log('my square is '+square(6));
console.log('my addition is '+add(10,20));
//console.log('my subtract is '+subtract(10,8));
console.log('my subtract is '+defaultCanBeRenamed(100,88));

//for person.js
console.log('Are you adult? '+ isAdult(15));
console.log('Drink? '+ canDrink(20));
console.log('are you senior? '+ seniorOrNot(65));