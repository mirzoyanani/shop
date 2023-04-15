import React from "react";
import { useSelector } from "react-redux";
const Basket = () => {
  const products = useSelector((state) => state.products.products);
  // console.log(products);
  let productPrices = [];
  const basketItems = useSelector((state) => state.basket.items);
  const totalAmout = basketItems.reduce((a, b) => a + b.price * b.buyCount, 0);
  return (
    <div className="basket">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Count</th>
            <th>Price</th>
            <th>/////////////</th>
          </tr>
        </thead>
        <tbody>
          {basketItems.map((item, i) => {
            productPrices.push(item.buyCount * item.price);
            return (
              <tr key={i}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.buyCount}</th>
                <th>{item.price}</th>
                <th>{item.buyCount * item.price}</th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={4}>Price</th>
            <th>{totalAmout}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Basket;
