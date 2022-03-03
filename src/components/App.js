import React, { useEffect, useRef  } from "react";
import Header from "./Header";
import Home from "pages/Home";
import Checkout from "pages/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "pages/Login";
import { useStateValue } from "./StateProvider";
import Navbar from './Navbar';
import Girl from "../Category/Girl";
import Man from "../Category/Man";
import Electronics from "../Category/Electronics";
import Food from "../Category/Food";
import Table from "../pages/Tables"
import Write from "../pages/Write";
import Notice from "../pages/Notice";





function App() {
  const [{}, dispatch] = useStateValue();


  return (

      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
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

            <Route path="/Man" component={Man}/>
            <Route path="/Girl" component={Girl}/>
            <Route path="/grocery" component={Food}/>
            <Route path="/Electronics" component={Electronics}/>
          </Switch>
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