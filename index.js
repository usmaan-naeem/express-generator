
// function getKey(k) {
//     return `a key named ${k}`;
//   }
  
  // bad
//   const obj = {
//     id: 5,
//     name: 'San Francisco',
//   };
//   obj[getKey('enabled')] = true;
//   console.log(obj)
  // good
//   const obj = {
//     id: 5,
//     name: 'San Francisco',
//     [getKey('enabled')]: true,
//   };

// const foo = "hello"
// const bar = [6, 7, 8, 9, 10]
// const baz = [...foo].map(bar);

// console.log(baz)

// good
// const baz = Array.from("foo", (bar => bar + 2));

// console.log(baz)

const arr = [1, 2, 3, 4];

// bad
// const first = arr[0];
// const second = arr[1];

// good
const [first, second, ...rest] = arr;
const [fourth, three] = arr;

console.log(first, second, fourth, three)