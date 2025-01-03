const domContainer = document.querySelector("#root");

const Fruits = () => {
  const [fruit, setFruit] = React.useState("");

  const [fruits, setFruits] = React.useState(["apple", "orange"]);

  return (
    <>
      <div className="container">
        <ul id="fruits">
          {fruits.sort().map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        <br />
        <p>
          <input
            type="text"
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
          />
        </p>
        <button onClick={() => setFruits([...fruits, fruit])}>Add Item</button>
      </div>
    </>
  );
};

ReactDOM.createRoot(domContainer).render(<Fruits />);
