import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="image/logo.png" alt="" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <Link to="/login" className="homelogin">
            <span className="header_optionLineOne">로그인d</span>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">공지사항</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">장터게시판</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">고객센터</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineOneheader_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
