import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "home/Home";
import Checkout from "pages/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Girl from "../Category/Girl";
import Man from "../Category/Man";
import Electronics from "../Category/Electronics";
import QnaView from "pages/QnaView";
import QnaList from "pages/QnaList";
import Write from "../pages/Write";
import Notice from "../pages/Notice";
import Subpage from "subpage/Subpage";

import Buy from "home/Buy";
import Sale from "home/Sale";
import SaleAndBuy from "home/SaleAndBuy";
import Auction from "subpage/Auction";
import Registration from "subpage/Registration";
import Posttwo from "pages/Posttwo";
import Post from "pages/Post";
import SearchResult from "subpage/SearchResult";
import ISell from "subpage/ISell";

import RegisteredOk from "pages/RegisteredOk";
import LoginPage from "pages/LoginPage";
import Agreement from "pages/Agreement";
import RegisterPage from "pages/RegisterPage";
import IDInquiry from "pages/IDInquiry";
import PWInquiry from "pages/PWInquiry";
import EditMyinfo from "pages/EditMyInfo";
import CheckPw from "pages/CheckPw";
import DeleteOk from "pages/DeleteOk";
import MyMarket from "pages/MyMarket";
import MyGk from "pages/MyGk";
import SubpageLogin from "subpage/SubpageLogin";
import BoardComment from "subpage/BoardComment";
import NewItems from "home/NewItems";

function App() {
	const [{}, dispatch] = useStateValue();
	const isLoggedIn = localStorage.getItem("token");

	return (
		<Router>
			<Header />
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/Notice">
						<Notice />
					</Route>
					<Route path="/qnalist">
						<QnaList />
					</Route>

					<Route path="/checkout">
						<Checkout />
					</Route>

					<Route path="/Write">
						<Write />
					</Route>

					<Route path="/Posttwo">
						<Posttwo />
					</Route>

					<Route path="/Post">
						<Post />
					</Route>

					{/* 서브페이지 목록 */}
					<Route path="/Buy">
						<Buy />
					</Route>

					<Route path="/Sale">
						<Sale />
					</Route>

					<Route path="/saleandbuy">
						<SaleAndBuy />
					</Route>

					<Route path="/Auction">
						<Auction />
					</Route>

					<Route path="/subpage">
						<Subpage />
					</Route>

					<Route path="/searchresult">
						<SearchResult />
					</Route>

					<Route path="/qnaview">
						<QnaView />
					</Route>
					<Route path="/isell">
						<ISell />
					</Route>
					<Route path="/newitems">
						<NewItems />
					</Route>

					{/* 유저 관련 */}
					<Route path="/login" component={LoginPage} />
					<Route path="/agreement" component={Agreement} />
					<Route path="/register" component={RegisterPage} />
					<Route path="/idinquiry" component={IDInquiry} />
					<Route path="/pwinquiry" component={PWInquiry} />
					<Route path="/RegisteredOk" component={RegisteredOk} />
					<Route
						path="/editmyinfo"
						component={isLoggedIn ? EditMyinfo : LoginPage}
					/>
					<Route path="/checkpw" component={isLoggedIn ? CheckPw : LoginPage} />
					<Route
						path="/registration"
						component={isLoggedIn ? Registration : LoginPage}
					/>
					<Route path="/deleteok" component={DeleteOk} />
					<Route
						path="/mymarket"
						component={isLoggedIn ? MyMarket : LoginPage}
					/>
					<Route
						path="/boardcomment"
						component={isLoggedIn ? BoardComment : LoginPage}
					/>
					<Route
						path="/subpagelogin"
						component={isLoggedIn ? SubpageLogin : LoginPage}
					/>
					<Route path="/mygk" component={isLoggedIn ? MyGk : LoginPage} />

					<Route path="/Man" component={Man} />
					<Route path="/Girl" component={Girl} />
					<Route path="/Electronics" component={Electronics} />

					{/*<Navbar />*/}
					{/*<Switch>*/}
					{/*  <Route path="/" exact component={Home} />*/}
					{/*  <Route path="/Man" component={Man} />*/}
					{/*  <Route path="/Girl" component={Girl} />*/}
					{/*  <Route path="/grocery" component={Food} />*/}
					{/*  <Route path="/Electronics" component={Electronics} />*/}
					{/*</Switch>*/}
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
