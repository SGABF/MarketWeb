import React, {useMemo, useState} from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
<<<<<<< HEAD
import { Route, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
=======
import {Route, Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
import {
    DropdownButton,
    SplitButton,
    ButtonGroup,
    Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Menu, MenuItem, MenuButton, SubMenu} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { Category } from "@material-ui/icons";
import * as loginService from "../service/AuthenticationService";


function Header() {
<<<<<<< HEAD
  const [{ basket }, dispatch] = useStateValue();
  const loginCheck = loginService.isUserLoggedIn();
=======
    const [{basket}, dispatch] = useStateValue();
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26

    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="image/logo.png" alt=""/>
            </Link>

<<<<<<< HEAD
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
              <Dropdown.Item eventKey="1">제목</Dropdown.Item>
              <Dropdown.Item eventKey="2">상품</Dropdown.Item>
              <Dropdown.Item eventKey="3">제목+내용</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">상품코드</Dropdown.Item>
            </DropdownType>
          ))}
        </>
        <input className="header_searchInput" type="search" />
        <SearchIcon fontSize="large" className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <Link to="/Notice" className="">
            <span className="header_optionLineOne">공지사항</span>
          </Link>
        </div>
        <div className="header_option">
          <Link to="/">
            <span className="header_optionLineOne">
              {" "}
              장터게시판
              {/*<Menu*/}
              {/*    menuButton={*/}
              {/*        <MenuButton className="button">장터게시판</MenuButton>*/}
              {/*    }*/}
              {/*>*/}
              {/*  <SubMenu label="경매글">*/}
              {/*    <MenuItem>입찰하기</MenuItem>*/}
              {/*    <MenuItem>잔여시간</MenuItem>*/}
              {/*    <MenuItem>입찰 인원 조회</MenuItem>*/}
              {/*    <MenuItem>경매 시작가 조회</MenuItem>*/}
              {/*  </SubMenu>*/}
              {/*</Menu>*/}
            </span>
          </Link>
        </div>

        <div className="header_option">
          <Link to="/Tables" className="">
            <span className="header_optionLineOne">고객센터</span>
          </Link>
        </div>

        <div className="header_option">
          {!loginCheck ? (
            <Link to="/login" className="homelogin">
              <span className="header_optionLineOne">로그인</span>
            </Link>
          ) : (
            <Link to="/login" className="homelogin">
              <span className="header_optionLineOne">로그아웃</span>
            </Link>
          )}
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineOneheader_basketCount">
=======
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

                            <Dropdown.Item eventKey="1">제목</Dropdown.Item>
                            <Dropdown.Item eventKey="2">상품</Dropdown.Item>
                            <Dropdown.Item eventKey="3">제목+내용</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item eventKey="4">상품코드</Dropdown.Item>
                        </DropdownType>
                    ))}
                </>
                <input className="header_searchInput" type="search"/>
                <SearchIcon fontSize="large" className="header_searchIcon"/>
            </div>

            <div className="header_nav">

                <div className="header_option">
                    <Link to="/Notice" className="">
                        <span className="header_optionLineOne">공지사항</span>
                    </Link>
                </div>
                <div className="header_option">
          <span className="header_optionLineOne">

            <Menu
                menuButton={
                    <MenuButton className="button">장터게시판</MenuButton>
                }
            >
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
                    <Link to="/Tables" className="">
                        <span className="header_optionLineOne">고객센터</span>
                    </Link>
                </div>


                <div className="header_option">
                    <Link to="/login" className="homelogin">
                        <span className="header_optionLineOne">로그인</span>
                    </Link>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket/>
                        <span className="header_optionLineOneheader_basketCount">
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
              {basket?.length}
            </span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;