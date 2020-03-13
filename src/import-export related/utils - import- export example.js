//there are two types of export, named and default export

//.............NAMED EXPORT............
console.log('From utils.js');

const square = (x) => x * x; // OR  export const square = (x) => x * x;
const add = (x,y) => x + y; // OR export const add = (x,y) => x + y;

export { square, add }; //exporting the data we want other file to use it. Note that export is not an object "THIS iS CALLED NAMED EXPORT", this typem is not required if we're exporting like we did in OR method above

//.......DEFAULT EXPORT

const subtract = (x,y) => x-y;

export { subtract as default }; OR export default subtract

//inline default export - we cant use data types like const, var etc

//export default (x,y) => x-y;

//..combining namesd and default exports

//export { square, add, subtract as default};
