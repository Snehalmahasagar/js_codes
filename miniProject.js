//closure
function  createUsersStore(){
    let user = [];
    return {
        setUsers(data){
            user=data;
        },getUsers(){
            return user;
        }
    }

}
//fetch
async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok){
        throw new Error("API failed");
        
    }return res.json();
    
}
//connect fetch to store
const store = createUsersStore();
async function init(){
    try{
        const data = await fetchUsers();
        store.setUsers(data);
        console.log("Users loaded");
        store.getUsers().map(user => console.log(user.name)); //map
const user1 = store.getUsers().find(u => u.id ===3);//reduce
console.log(user1);

const filtered = store.getUsers().filter(u => u.address.city === "Mumbai");
console.log(filtered)

    }catch(err){
        console.log("Error: ",err);
    }
}init();

//Array methods




