<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Home from "pages/Home";
import Checkout from "pages/Checkout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "pages/Login";
=======
import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Home from "pages/Home";
import Checkout from "pages/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
import { useStateValue } from "./StateProvider";
import Navbar from "./Navbar";
import Girl from "../Category/Girl";
import Man from "../Category/Man";
import Electronics from "../Category/Electronics";
<<<<<<< HEAD
import Table from "../pages/Tables";
import Write from "../pages/Write";
import Notice from "../pages/Notice";
import Subpage from "subpage/Subpage";
import Subpagetwo from "subpage/Subpagetwo";
import Buy from "subpage/Buy";
import Sale from "subpage/Sale";
import Auction from "subpage/Auction";
import Registration from "subpage/Registration";
import Posttwo from "pages/Posttwo";
import Post from "pages/Post";
=======
import Food from "../Category/Food";
import Table from "../pages/Tables";
import Write from "../pages/Write";
import Notice from "../pages/Notice";
import Agreement from "../pages/Agreement";
import IDInquiry from "../pages/IDInquiry";
import PWInquiry from "../pages/PWInquiry";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import RegisteredOk from "../pages/RegisteredOk";
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26

function App() {
  const [{}, dispatch] = useStateValue();

  return (
    <Router>
      <div className="App">
        <Header />
<<<<<<< HEAD

        <Route path="/login">
          <Login />
        </Route>
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

        <Route path="/subpagetwo">
          <Subpagetwo />
        </Route>

        <Route path="/Man" component={Man} />
        <Route path="/Girl" component={Girl} />
        <Route path="/Electronics" component={Electronics} />
=======
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Write">
            <Write />
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
    
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/agreement" component={Agreement} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/idinquiry" component={IDInquiry} />
          <Route exact path="/pwinquiry" component={PWInquiry} />
          <Route exact path="/regok" component={RegisteredOk} />

          <Route path="/Man" component={Man} />
          <Route path="/Girl" component={Girl} />
          <Route path="/grocery" component={Food} />
          <Route path="/Electronics" component={Electronics} />
        </Switch>
>>>>>>> d49f371af1902cc21cc279c8e61dc4a1ed485f26
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
