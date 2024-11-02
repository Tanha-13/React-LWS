let fruitsContainer = document.querySelector("#fruits");
const btn = document.querySelector("#button");

// creating an custom method
// Array.prototype.myPush = function(...a){
//     this.push(a[0]);
//     init();
// }

let fruits = ["apple", "mango", "guava", "orange"];

const init = function(){
    fruitsContainer.innerHTML = '';
    fruits.sort().forEach(fruit => {
        let item = document.createElement("li");
        item.textContent = fruit;
        fruitsContainer.appendChild(item);
    })

}
const addItem = () =>{
    // fruits.myPush(document.getElementById("input").value);

    let inputValue = document.getElementById("input").value;
    fruits.push(inputValue);
    init();
    document.getElementById("input").value = '';
}

init();
