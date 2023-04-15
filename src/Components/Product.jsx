import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBasketItems } from "../redux/Slices/basketSlice";
import { incrementCount, decrementCount } from "../redux/Slices/productsSlice";
const Product = ({ id, name, price, url, count }) => {
  const [buyCount, setBuyCount] = useState(0);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    if (count != 0) {
      setBuyCount(buyCount + 1);
      dispatch(decrementCount({ productId: id }));
    }
  };
  const handleDecrement = () => {
    if (buyCount > 0) {
      setBuyCount(buyCount - 1);
      dispatch(incrementCount({ productId: id }));
    }
  };
  function handleAddToBasket() {
    dispatch(setBasketItems({ id, name, price, buyCount }));
    setBuyCount(0);
  }
  return (
    <div className="productDiv">
      <h4>{name}</h4>
      <img src={url} style={{ width: "150px", height: "150px" }} />
      <p>Price:{price}</p>
      <p>Avaliable quantity:{count}</p>
      <span>
        <button className="countbutton" onClick={handleIncrement}>
          +
        </button>
        <span>{buyCount}</span>
        <button className="countbutton" onClick={handleDecrement}>
          -
        </button>
      </span>
      <button className="addBasketButton" onClick={handleAddToBasket}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
