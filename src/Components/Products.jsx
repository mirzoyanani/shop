import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/Slices/productsSlice";
import "./Products.css";
import Product from "./Product";


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    if (products.length == 0) {
      fetch("http://localhost:3000/products")
        .then((rsp) => {
          return rsp.json();
        })
        .then((rsp) => dispatch(setProducts(rsp)));
    }
  }, []);
  return (
    <div className="products">
      {products.map((product, i) => {
        return (
          <Product
            key={i}
            id={product.id}
            count={product.quantity}
            url={product.url}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
