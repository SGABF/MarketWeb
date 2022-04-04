import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Home from "pages/Home";
import Checkout from "pages/Checkout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "pages/Login";
import { useStateValue } from "./StateProvider";
import Navbar from "./Navbar";
import Girl from "../Category/Girl";
import Man from "../Category/Man";
import Electronics from "../Category/Electronics";
import Table from "../pages/Tables";
import Write from "../pages/Write";
import Notice from "../pages/Notice";
import Subpage from "subpage/Subpage";

import Buy from "subpage/Buy";
import Sale from "subpage/Sale";
import Auction from "subpage/Auction";
import Registration from "subpage/Registration";
import Posttwo from "pages/Posttwo";
import Post from "pages/Post";
import SearchResult from "subpage/SearchResult";

import RegisteredOk from "pages/RegisteredOk";
import LoginPage from "pages/LoginPage";
import Agreement from "pages/Agreement";
import RegisterPage from "pages/RegisterPage";
import IDInquiry from "pages/IDInquiry";
import PWInquiry from "pages/PWInquiry";
import EditMyinfo from "pages/EditMyInfo";
import CheckPw from "pages/CheckPw";
import DeleteOk from "pages/DeleteOk";
import NoticeDetail from "pages/NoticeDetail";

function App() {
  const [{}, dispatch] = useStateValue();
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Notice">
          <Notice />
        </Route>
        <Route path="/Tables">
          <Table />
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

        <Route path="/Auction">
          <Auction />
        </Route>

        <Route path="/Registration">
          <Registration />
        </Route>

        <Route path="/subpage">
          <Subpage />
        </Route>

        <Route path="/searchresult">
          <SearchResult />
        </Route>

        <Route path="/noticedetail">
          <NoticeDetail />
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
        <Route path="/deleteok" component={DeleteOk} />
        {/* <Route path="/">Not Found</Route> */}

        <Route path="/Man" component={Man} />
        <Route path="/Girl" component={Girl} />
        <Route path="/Electronics" component={Electronics} />
      </div>

      {/*<Navbar />*/}
      {/*<Switch>*/}
      {/*  <Route path="/" exact component={Home} />*/}
      {/*  <Route path="/Man" component={Man} />*/}
      {/*  <Route path="/Girl" component={Girl} />*/}
      {/*  <Route path="/grocery" component={Food} />*/}
      {/*  <Route path="/Electronics" component={Electronics} />*/}
      {/*</Switch>*/}
    </Router>
  );
}

export default App;
