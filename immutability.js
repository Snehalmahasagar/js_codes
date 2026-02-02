const user = {name: "snehal",
    address : {city : "solapur"}
};
const updateUser = {
    ...user,
    
    name: "Rahul",
    address:{
        ...user.address,
        city : "Mumbai"}
}

console.log(user.name);
console.log(user.address.city);
console.log(updateUser.name);
console.log(updateUser.address.city);