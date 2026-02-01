async function fetchUsers(){
    let loading = true;
    let err= null;
    try{  //success state
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok){
            throw new Error("Api failed")

        }
        return res.json();

    }catch(err){ //error state
        error = err.message;
        console.log("Error: ",error);
    }finally{ //laoding state
        loading = false;
        console.log("loading");
    }

}
fetchUsers();
const url = "https://jsonplaceholder.typicode.com/users";
async function safeFetch(url){
    const res = await fetch(url)
    if(!res.ok){
        throw new Error("Api failed")
    }
    return await res.json();
    
}

safeFetch();