import React from "react";
import "./product.css";
const Product = (props) => {
  // console.log(props.product);
  let { img, name, seller, quantity, ratings, price } = props.product;
  // console.log(quantity);
  return (
    <div className="w-[290px] mt-20 h-[510px] mm relative ">
      <img src={img} alt="" className="w-[286px] p-2 mx-auto" />
      <div className="pl-4 pt-4">
        <h6 className="Product-name">{name}</h6>
        <h5 className="pt-2 text-2xl font-bold">Price:{price} </h5>
        <div className="pt-7">
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} star</p>
        </div>
      </div>
      <button className="w-full  bg-yellow-400  bottom-0 rounded-lg py-4 absolute hover:bg-red-400">add to cart</button>
    </div>
  );
};

export default Product;
