import { createRoot } from "react-dom/client";
import image from "./images/parcelfavicon.jpg";
import "./style.css";
const h1 = <h1>hello world</h1>;

//function me html object ko return kar dete hain
function Card(props) {
  const { id, title, image, brand, price } = props;
  return (
    <div key={id} className="card">
      <img src={image} alt="parcel-image"></img>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.products);
//     const container2 = data.products.map((item) => Card(item));
//     root.render(<div className="container">{container2}</div>);
//   });

// rendering react element

//react component is a react element whose type is a function
const reactElemntOrComponent = {
  $$typeof: Symbol.for("react.element"),
  type: Card,
  ref: null,
  props: {
    title: "harsh",
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    brand: "chhotaku lal",
    price: 99,
    id: 1,
  },
};

root.render(reactElemntOrComponent);
