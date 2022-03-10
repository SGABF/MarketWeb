import React from "react";
import "./Product.css";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

function Product({ id, title, image, price, code, location }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        code: code,
        location: location,
      },
    });
  };


  console.log("장바구니 확인");

  return (
    <div className="product">
      <div className="product_info">
        <strong>{title}</strong>

        <p className="product_price">
          <small>가격</small>
          <strong>{price}</strong>
          <small>원</small>
          <br />
          <small>코드</small>
          <strong>{code}</strong>
        </p>
      </div>

      {/* <Link to={location}> */}
      <img src={image} alt="" />
      {/* </Link> */}

      <div>
        <button className="bastket" onClick={addToBasket}>
          <ShoppingBasket />
        </button>
        <Link to={location}>
          <button className="icon">
            <ZoomInIcon />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
