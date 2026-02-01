async function fetchUsers(){
    let loading = true;
    let err= null;
    try{  //success state
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok){
            throw new Error("Api failed")

        }
        const data = await res.json();
        console.log(data);

    }catch(err){ //error state
        error = err.message;
        console.log("Error: ",error);
    }finally{ //laoding state
        loading = false;
        console.log("loading");
    }

}
fetchUsers();