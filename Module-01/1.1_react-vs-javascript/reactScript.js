// const p = document.createElement('p');
// p.innerText = 'Hello World!!';

// document.getElementById('root').appendChild(p);

//creating an element using React.createElement
// const myElement = React.createElement("div",null,"Hello World");

//creating nested elements
// const myElement = React.createElement(
//   "div",
//   null,
//   React.createElement("p", null, "Hello World")
// );
//creating a complex ui using React.createElement can be difficult to handle.
// const myElement = (
//     <div>
//         <p>Hello World!!</p>
//     </div>
// );

//using react component

const ProductCard = () => {
  const [productPrice, setProductPrice] = React.useState(5000);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  const addToCart = () => {
    setQuantity((prev) => prev + 1);
    // const result = quantity * productPrice;
    // setTotalPrice(result);
  };
  return (
    <>
      <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
            alt="product image"
          />
        </a>
        <div className="px-5 py-5">
          <div className="flex items-center justify-between mt-5">
            <a href="#">
              <h3 className="font-semibold text-xl tracking-tight">
                Reactive Accelerator Course
              </h3>
            </a>
            <span id="totalPrice" className="text-xl font-medium text-teal-500">
              ৳ {quantity * productPrice}
            </span>
          </div>
          <div className="flex items-center justify-between mt-5">
            <span
              className="text-2xl font-bold text-slate-300"
            >
              ৳ {productPrice}
            </span>
            <a
              onClick={addToCart}
              href="#"
              className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <ProductCard/>
        <ProductCard/>
    </>
);
