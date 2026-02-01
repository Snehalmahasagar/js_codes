/*function multilple(a, b) {
  return a * b;
}
function isEven(n) {
  if (n % 2 == 0) {
    console.log("yes");
  }
}
const result = multilple(5, 6);
console.log(result);

const res = isEven(4);
console.log(res); */

const add = (a, b) => {
  return a + b;
};
const res = add(5, 6);
console.log(res);

const sq = (n) => n * n;
const res1 = sq(4);
console.log(res1);
const age = (name, n) => {
  if (n > 18) {
    return name + " is eligible";
  }
  return name + " not eligible";
};
const res2 = age("snehal", 4);
console.log(res2);

const users = [
  { name: "snehl", age: "22", city: "solapur" },
  {
    name: "sneh",
    age: "21",
    city: "solapu",
  },
];
users.map((user) => {
  console.log(users[1].name);
});

let a = 9;
let b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b);

const user1 = {
  name: "snehal",
  address: {
    city: "solapur",
  },
};
const update = {
  ...user1,
  name: "sonu",
  address: {
    ...user1.address,
    city: "mumbai",
  },
};
console.log(update.name);
console.log(user1.address.city);
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log(doubled);

const small = numbers.filter((num) => num < 3);
console.log(small);

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);
console.log(sum);

const multi = numbers.reduce((count, num) => {
  if (num % 2 == 0) {
    count++;
  }
  return count;
}, 0);
console.log(multi);
