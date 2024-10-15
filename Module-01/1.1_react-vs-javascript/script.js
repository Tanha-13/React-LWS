// catch DOM elements
const button = document.querySelector("#addToCart");
const price = document.querySelector("#productPrice");
const totalPrice = document.querySelector("#totalPrice");
// console.log(totalPrice);


//state or data
const productPrice = 5000;
let total = 0;

//set product price initially
price.innerText = `৳ ${productPrice}`;
totalPrice.innerText=`Total: ৳ 0`;

button.addEventListener("click",()=>{
    total+=productPrice;

    //update UI
    totalPrice.innerText=`Total: ৳ ${total}`;
})