import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import "../shopw//Shope.css";
const Shope = () => {
  let [products, setproduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
    .then(res=>res.json())
    .then((data)=>setproduct(data))
    
  }, []);
  return (
    <div>
      <div className="container">
        {/* right side */}

        <div className="bg-primary">
          <h1>products length : {products.length}</h1>
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
