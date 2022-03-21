import React from "react";
import "./Checkout.css";
import CheckoutProduct from "components/CheckoutProduct";
import { useStateValue } from "components/StateProvider";
import Footer from "../components/Footer";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="image/ad1.jpg" alt="" />

        <div>
          <h2 className="checkout_title">장바구니입니다.</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              code={item.code}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">

      </div>
    </div>

  );
}

export default Checkout;

