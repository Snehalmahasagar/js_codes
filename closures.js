//closures
function createAdder(x){
    let cnt = 0 ;
    return function(y){
        
        return x + y;
        
    };

}
const counter = createAdder(10);
console.log(counter(5));
console.log(counter(10));