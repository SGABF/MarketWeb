import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, code }) {
  const [{ basket }, dispatch] = useStateValue();

  const remoceFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      title: title,
      image: image,
      price: price,
      code: code,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₩</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>



        <button onClick={remoceFromBasket}>장바구니에서 제거하기</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
