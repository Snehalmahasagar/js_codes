const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("data passed");
  } else {
    reject("error");
  }
});

myPromise
  .then((data) => {
    console.log("Succeess ", data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Snehal", agr: 22 });
    }, 1000);
  });
}
fetchUser()
  .then((user) => {
    console.log(user.name);
  })
  .catch((err) => {
    console.log(error);
  });
