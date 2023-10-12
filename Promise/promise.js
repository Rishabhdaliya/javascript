//? simple aync and await

// function simpleDisplay(ans) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Rishabh');
//     }, 2000);
//   });
// }

// async function showAll() {
//   console.log('Before Promise');
//   output = await simpleDisplay('y');
//   console.log('Function Output is:', output);
//   console.log('After Promise');
// }

// //? call the function
// showAll();

//!-----------------------------------------

//? Async Await with try catch

// function display(ans) {
//   return new Promise((resolve, reject) => {
//     if (ans === 'y') {
//       setTimeout(() => {
//         resolve('Rishabh');
//       }, 2000);
//     } else {
//       reject('Unexpected input');
//     }
//   });
// }

// async function show() {
//   try {
//     const output = await display('y');
//     console.log('Function Output is:', output);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// show();

//!-----------------------------------------

//? function returns promise

// function display(ans) {
//   return new Promise((resolve, reject) => {
//     if (ans === 'y') {
//       setTimeout(() => {
//         resolve('Rishabh');
//       }, 2000);
//     } else {
//       reject('Unexpected input');
//     }
//   });
// }

// //? then and catch Promise

// const response = display('y')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// let output;
