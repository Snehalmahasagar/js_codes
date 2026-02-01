const userUrl = "https://jsonplaceholder.typicode.com/users"
const postUrl = "https://jsonplaceholder.typicode.com/posts"

async function fetchUsers(userUrl){
    const res = await fetch(userUrl);
    if(!res.ok){
        throw new Error("API failed");
    }
    return await res.json();
}
async function fetchPosts(postUrl) {
    const response = await fetch(postUrl)
    if(!response.ok){
        throw new Error("API failed");
    }
    return await response.json();
}
async function main() {
    try{
        const [users,data] = await Promise.all([
            fetchUsers(userUrl),
            fetchPosts(postUrl)
        ])
    console.log(users);
    console.log(data);
    }
    catch(error){
        console.log("Error: ",error);
    }
    
}
main()