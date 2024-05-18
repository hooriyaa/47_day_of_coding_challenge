import { log } from "console";

let num = 10;

if (7 < 8) {
  console.log("correct 7 is less than 8");
}

function sum(a: number, b: number) {
  return a * b;
}

// let else = 5
console.log(
  "Using a reserved word as a variable name causes a syntax error in JavaScript."
);

// async function fetchData(data:string) {
//     // let res=await fetch(data)
//     // console.log(res);
//     let data=await fetchSomething()

//   }
// console.log(
//   "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
// );

// function fetchSomething() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 1000); // Simulating a delay of 1 seconds
//     });
// }

// async function fetchData() {
//     // Assuming fetchSomething returns a promise
//     const data = await fetchSomething();
//     console.log(data);

// }

// (async () => {
//     console.log(
//         "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear function."
//     );
//     // This demonstrates how 'await' improves readability and flow in asynchronous code.
//     await fetchData();
// })();

function fetchSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fetch data successfully!!!");
    }, 1000);
  });
}
async function fetchData() {
  let data = await fetchSomething();
  console.log(data);
}
console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear function."
);
await fetchData();
