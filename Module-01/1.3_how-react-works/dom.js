// Costly DOM Manipulation vs Efficient DOM Manipulation

let array = [];
let increment = 0;
console.log(increment);

let container = document.querySelector(".container");


//fast - rendering only one time. 1 dom operation
while(increment < 10000){
    array.push(++increment);
}

container.innerHTML = array.join(" ");


// slow - in every iteration, we are calling the container box and changing its inner text. So every time the rerender process is working. 10000 dom operation
// while(increment < 10000){
//     increment++;
//     container.innerHTML += " " + increment;
// }

