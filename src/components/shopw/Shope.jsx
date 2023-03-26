import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import "../shopw//Shope.css";
const Shope = () => {
  let [products, setproduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);
  return (
    <div>
      <div className="container">
        {/* right side */}

        <div className=" container2">

          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
            
          ))}

        </div>
        {/* left side  */}

        <div className="bg-red-500">
          <h1>mahedi</h1>
        </div>
      </div>
    </div>
  );
};

export default Shope;
