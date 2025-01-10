import { createRoot } from "react-dom/client";
import image from "./images/parcelfavicon.jpg";
import "./style.css";
const h1 = <h1>hello world</h1>;

//function me html object ko return kar dete hain
function Card(item) {
  return (
    <div key={item.id} className="card">
      <img src={item.thumbnail} alt="parcel-image"></img>
      <div className="card-content">
        <h2>{item.title}</h2>
        <p>{item.brand}</p>
        <p>
          <b>${item.price}</b>
        </p>
      </div>
    </div>
  );
}
// console.log(Card());
// const container = [Card(1), Card(2), Card(3), Card(4), Card(5), Card(6)];
const root = createRoot(document.getElementById("root"));
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    const container2 = data.products.map((item) => Card(item));
    root.render(<div className="container">{container2}</div>);
  });
