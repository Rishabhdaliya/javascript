// Can be reinitalized and block level scope
let a = 5;
a = 70;

// Can be reinitalized and function level scope
var b = 50;
b = 70;

// Data types:
let firstName = 'Aman'; //string
let PI = 3.14; //number
let isActive = true; //boolean
let fruits = ['banana', 'apple', 'kiwi']; //array
let product = {
  name: 'iphone', //string
  price: 676, //number
  isAvailable: false, //boolean
  fruits: ['banana', 'apple', 'kiwi'],
};

let collection = [
  {
    name: 'iphone', //string
    price: 676, //number
    isAvailable: false, //boolean
    fruits: ['banana', 'apple', 'kiwi'],
  },
  {
    name: 'iphone2', //string
    price: 9999, //number
    isAvailable: false, //boolean
    fruits: ['banana', 'apple', 'kiwi'], //array
  },
];

let dummy = null; //null
let empty; //undefined

//check the type
console.log(typeof empty);
