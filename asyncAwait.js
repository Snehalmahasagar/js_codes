async function fetchUsers(params) {
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!res.ok){
      Error("Api failed")
    }
    const data = await res.json();
   const result =  data.map(user =>user.name)
      
    console.log(result)

    console.log(result)
  }catch(error){
    console.log("Error: ",error.message);
  }
  
}fetchUsers()