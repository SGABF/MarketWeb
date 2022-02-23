import React, { useMemo, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {
  DropdownButton,
  SplitButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="image/logo.png" alt="" />
      </Link>

      <div className="header_search">
        <>
          {[DropdownButton].map((DropdownType, idx) => (
            <DropdownType
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="sm"
              variant="light"
              title="전체"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownType>
          ))}
        </>
        <input className="header_searchInput" type="search" />
        <SearchIcon fontSize="large" className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">공지사항</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">
            <Menu
              menuButton={
                <MenuButton className="button">장터게시판</MenuButton>
              }
            >
              <SubMenu label="구매글">
                <MenuItem>검색</MenuItem>
                <MenuItem>직거래</MenuItem>
                <MenuItem>택배</MenuItem>
                <MenuItem>메뉴</MenuItem>
                <MenuItem>즐겨찾기</MenuItem>
              </SubMenu>
              <SubMenu label="판매글">
                <MenuItem>판매 제품 업로드</MenuItem>
                <MenuItem>직거래</MenuItem>
                <MenuItem>택배</MenuItem>
                <MenuItem>1:1대화</MenuItem>
              </SubMenu>
              <SubMenu label="경매글">
                <MenuItem>입찰하기</MenuItem>
                <MenuItem>잔여시간</MenuItem>
                <MenuItem>입찰 인원 조회</MenuItem>
                <MenuItem>경매 시작가 조회</MenuItem>
              </SubMenu>
            </Menu>
          </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">고객센터</span>
        </div>
        <div className="header_option">
          <Link to="/login" className="homelogin">
            <span className="header_optionLineOne">로그인</span>
          </Link>
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
