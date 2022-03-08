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
import Food from "../Category/Food";
import Table from "../pages/Tables";
import Write from "../pages/Write";
import Notice from "../pages/Notice";
import Subpage from "subpage/Subpage";
import Subpagetwo from "subpage/Subpagetwo";

function App() {
  const [{}, dispatch] = useStateValue();

  return (
    <Router>
      <div className="App">
        <Header />

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

        {/* 서브페이지 목록 */}
        <Route path="/subpage">
          <Subpage />
        </Route>

        
        <Route path="/subpagetwo">
          <Subpagetwo />
        </Route>

        <Route path="/Man" component={Man} />
        <Route path="/Girl" component={Girl} />
        <Route path="/grocery" component={Food} />
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
