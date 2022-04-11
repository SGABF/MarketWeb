import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import * as loginService from "../service/AuthenticationService";
import { useHistory } from "react-router-dom";

function Header() {
	let [loginCheck, setloginCheck] = useState("");
	let [keyword, setKeyword] = useState("");
	const [{ basket }, dispatch] = useStateValue();
	loginCheck = loginService.isUserLoggedIn();
	const loggedInUser = loginService.getLoggedInUserName();
	let history = useHistory();

	const logOut = () => {
		localStorage.removeItem("authenticatedUser");
		localStorage.removeItem("token");
		window.alert("로그아웃이 성공적으로 완료되었습니다.");
		setloginCheck(false);
		history.push("/login");
	};

	const onCheckEnter = (e) => {
		if (e.key === "Enter") {
			history.push({
				pathname: "/searchresult",
				state: keyword,
			});
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img className="header_logo" src="image/logo.png" alt="" />
			</Link>

			<div className="header_search">
				{/* <>
          {[DropdownButton].map((DropdownType, idx) => (
            <DropdownType
            onSelect={handleSelect}
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            variant="light"
            title="전체"
            >
              <Dropdown.Item eventKey="board_name" >상품명</Dropdown.Item>
              <Dropdown.Item eventKey="board_content">내용</Dropdown.Item>
              <Dropdown.Item eventKey="board_all">전체</Dropdown.Item>
            </DropdownType>
          ))}
        </> */}
				<input
					className="header_searchInput"
					type="search"
					onChange={(e) => setKeyword(e.target.value)}
					onKeyPress={onCheckEnter}
				/>
				<Link
					to={{
						pathname: "/searchresult",
						state: keyword,
					}}
				>
					<SearchIcon
						type="button"
						fontSize="large"
						id="searchIcon"
						className="header_searchIcon"
					/>
				</Link>
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
							{/* <Menu*/}
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
							{/*</Menu> */}
						</span>
					</Link>
				</div>

				<div className="header_option">
					<Link to="/qnalist" className="">
						<span className="header_optionLineOne">고객센터</span>
					</Link>
				</div>

				<div className="header_option">
					{!loginCheck ? (
						<Link to="/login" className="homelogin">
							<span className="header_optionLineOne">로그인</span>
						</Link>
					) : (
						<Menu
							menuButton={
								<MenuButton className="button">{loggedInUser}님</MenuButton>
							}
						>
							<Link to="/mymarket">
								<MenuItem>My Market</MenuItem>
							</Link>
							<Link to="/mygk">
								<MenuItem>My 개꿀</MenuItem>
							</Link>
							<Link to="/checkpw">
								<MenuItem>회원정보수정</MenuItem>
							</Link>
							<MenuItem onClick={logOut}>로그아웃</MenuItem>
						</Menu>
					)}
				</div>
				{/* <Link to="/checkout">
					<div className="header_optionBasket">
						<ShoppingBasket />
						<span className="header_optionLineOneheader_basketCount">
							{basket?.length}
						</span>
					</div>
				</Link> */}
			</div>
		</div>
	);
}

export default Header;
